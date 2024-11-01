using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace StWarStudios.Web.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        public DefaultController(IConfiguration configuration)
        {
            this.ApiVersion = configuration.GetValue<string>("EnvRelease");
            this.EnvRelease = configuration.GetValue<string>("EnvRelease");
        }

        public string? ApiVersion { get; }
        public string? EnvRelease { get; }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok($"Api version: {ApiVersion}, Env Released: {EnvRelease}");
        }
    }
}
