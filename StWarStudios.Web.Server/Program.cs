using Microsoft.EntityFrameworkCore;
using StWarStudios.Data;
using StWarStudios.Web.Server.Mapper;
using StWarStudios.Web.Server.Middleware;

namespace StWarStudios.Web.Server;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddAutoMapper(typeof(MapperProfile));
        builder.Services.ConfigureData(builder.Configuration);
        string? envRelease = builder.Configuration.GetValue<string>("EnvRelease");

        builder.Logging.AddConsole();
        builder.Logging.SetMinimumLevel(LogLevel.Trace);

        string reactAppOrigin = "https://localhost:5173";
        string reactAppOriginQA = "https://qa-stwarstudios.azurewebsites.net";
        string reactAppOriginProd = "https://stwarstudios.com:5000";
        string reactAppOriginQASite = "https://stwarstudios.azurewebsites.net";

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReactApp", policy =>
            {
                policy.WithOrigins(reactAppOrigin)
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                policy.WithOrigins(reactAppOriginQA)
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                policy.WithOrigins(reactAppOriginProd)
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                policy.WithOrigins(reactAppOriginQASite)
                        .AllowAnyHeader()
                        .AllowAnyMethod();                    
            });
        });

        
        var app = builder.Build();
        using (var scope = app.Services.CreateScope())
        {
            var services = scope.ServiceProvider; 
            try { 
                var context = services.GetRequiredService<AppDbContext>();
                context.Database.Migrate(); 
            }
            catch (Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();                 
                logger.LogError(ex, "An error occurred while migrating the database.");
                throw;
            }
        }
        app.UseMiddleware<CorsLoggingMiddleware>();
        app.UseMiddleware<ExceptionHandlingMiddleware>();
        app.UseDefaultFiles();
        app.UseStaticFiles();

        // Configure the HTTP request pipeline.
        if (envRelease == "QA")
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseRouting();
        app.UseHttpsRedirection();

        app.UseAuthorization();
        app.UseCors("AllowReactApp");           

        app.MapControllers();

        app.MapFallbackToFile("/index.html");

        app.Run();
    }
}