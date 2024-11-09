using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StWarStudios.Data;
using StWarStudios.Data.Entities;
using StWarStudios.Web.Server.ApiUtilities;
using StWarStudios.Web.Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StWarStudios.Web.Server.Controllers
{
    [Route("v1/api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        public ContactController( AppDbContext context, ILogger<ContactController> logger, IMapper mapper)
        {
            _dbContext = context;
            _logger = logger;
            _mapper = mapper;
        }

        public AppDbContext _dbContext { get; }
        public ILogger<ContactController> _logger { get; }
        public IMapper _mapper { get; }

        // GET: api/<ContactController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var response = await _dbContext.Contacts.AsNoTracking().ToListAsync();
            return Ok(response);
        }

        // POST api/<ContactController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ContactCreationModel value)
        {
            int result = -1;
            Contact entity = null;
            if(value == null)
            {
                throw new ArgumentNullException(nameof(value));
            }

            var usrRsqt = CreateRequest(null, value?.UserPublicIP ?? "UNKNOWN");

            try
            {
                var currentDateUTC = DateTime.UtcNow.AddMinutes(-2);
                var ips = _dbContext.UserRequests
                    .Where( ur => ur.UserIp == value.UserPublicIP && ur.CreationDate > currentDateUTC)
                    .ToList();                

                if (ips.Any())
                {
                    foreach(var ip in ips)
                    {
                        ip.Count += 1;
                    }
                    _dbContext.UpdateRange(ips);
                    await _dbContext.SaveChangesAsync();

                    await SaveError(new Error
                    {
                        Type = "Log",
                        Action = "Insert Conact",
                        Message = "User has requested insert contact again. please wait and retry later",
                        Description = "No more description",
                        Details = "No details",
                        UserRequestID = ips.FirstOrDefault()!.Id
                    });

                    return Ok(ApiResponseUtility.Error("We have received your request previously. please wait and retry later"));
                }

                entity = _mapper.Map<Contact>(value);
                entity.Id = Guid.NewGuid();
                entity.CreationDate = DateTime.UtcNow;

                _dbContext.Contacts.Add(entity);

                usrRsqt.ObjectId = entity.Id;
                await _dbContext.UserRequests.AddAsync(usrRsqt);

                result = await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex, "Error on inserting contact");
                await SaveError(ExceptionToError(ex, usrRsqt.Id != Guid.Empty ? usrRsqt.Id : null));
            }

            return result > 0 ? 
                Ok(ApiResponseUtility.Success<Guid> (entity!.Id)) : 
                BadRequest(ApiResponseUtility.Error("Couldn't create entity: check logs"));

        }

        private UserRequest CreateRequest(Guid? relatedObject, string userPublicIP)
        {
            return new UserRequest
            {
                Count = 1,
                ObjectId = relatedObject,
                UserIp = userPublicIP,
            };
        }

        private Error ExceptionToError(Exception ex, Guid? requestId)
        {
           return new Error { 
                Type = "Exception",
                Action = "Insert Conact", 
                Message = ex.Message, 
                Description = ex.InnerException != null ? ex.InnerException.Message : "No more description", 
                Details = ex.StackTrace ?? "No details",
                UserRequestID = requestId
            };            
        }

        private async Task SaveError(Error error)
        {
            await _dbContext.Errors.AddAsync(error);
            await _dbContext.SaveChangesAsync();
        }
    }
}
