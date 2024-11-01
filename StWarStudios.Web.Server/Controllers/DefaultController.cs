using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace StWarStudios.Web.Server.Controllers
{
    [Route("v1/api")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
        public DefaultController(IConfiguration configuration)
        {
            this.ApiVersion = configuration.GetValue<string>("ApiVersion");
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
