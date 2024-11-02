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
            try
            {
                entity = _mapper.Map<Contact>(value);
                entity.Id = Guid.NewGuid();
                _dbContext.Contacts.Add(entity);
                result = await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex, "Error on inserting contact");                
            }           

            return result > 0 ? 
                Ok(ApiResponseUtility.Success<Guid> (entity!.Id)) : 
                BadRequest(ApiResponseUtility.Error("Couldn't create entity: check logs"));

        }
    }
}
