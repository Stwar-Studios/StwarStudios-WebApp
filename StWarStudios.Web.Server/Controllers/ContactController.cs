using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StWarStudios.Data;
using StWarStudios.Data.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StWarStudios.Web.Server.Controllers
{
    [Route("v1/api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        public ContactController( AppDbContext context, ILogger<ContactController> logger)
        {
            _dbContext = context;
            _logger = logger;
        }

        public AppDbContext _dbContext { get; }
        public ILogger<ContactController> _logger { get; }

        // GET: api/<ContactController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var response = await _dbContext.Contacts.AsNoTracking().ToListAsync();


            return Ok(response);
        }

        // POST api/<ContactController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Contact value)
        {
            int result = -1;
            try
            {
                _dbContext.Contacts.Add(value);
                result = await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex, "Error on inserting contact");                
            }
            

            return result > 0 ? Ok() : BadRequest();

        }
    }
}
