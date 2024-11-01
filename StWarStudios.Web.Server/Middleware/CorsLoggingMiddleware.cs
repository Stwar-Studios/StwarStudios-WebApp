namespace StWarStudios.Web.Server.Middleware
{
    public class CorsLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<CorsLoggingMiddleware> _logger;

        public CorsLoggingMiddleware(RequestDelegate next, ILogger<CorsLoggingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            context.Response.OnStarting(() =>
            {
                if (context.Response.StatusCode == StatusCodes.Status403Forbidden &&
                    context.Response.Headers.ContainsKey("Access-Control-Allow-Origin"))
                {
                    var origin = context.Request.Headers["Origin"].FirstOrDefault();
                    var ipAddress = context.Connection.RemoteIpAddress;
                    _logger.LogWarning($"CORS policy blocked request from {origin} with IP {ipAddress}");
                }

                return Task.CompletedTask;
            });

            await _next(context);
        }
    }
}
