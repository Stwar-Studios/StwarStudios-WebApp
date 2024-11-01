
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StWarStudios.Data;
using StWarStudios.Web.Server.Middleware;
using System;

namespace StWarStudios.Web.Server
{
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

            string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            string? envRelease = builder.Configuration.GetValue<string>("EnvRelease");

            builder.Services.AddDbContext<AppDbContext>(options =>
            {
                options.UseSqlServer(connectionString)
                .EnableDetailedErrors()
                .EnableSensitiveDataLogging();
                //.UseSnakeCaseNamingConvention();
            });

            builder.Logging.AddConsole();

            string reactAppOrigin = "https://localhost:5173";
            string reactAppOriginQA = "https://qa-stwarstudios.azurewebsites.net/";
            string reactAppOriginProd = "https://stwarstudios.com:5000";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp-Dev", policy =>
                {
                    policy.WithOrigins(reactAppOrigin)
                          .AllowAnyHeader()
                          .AllowAnyMethod();

                    policy.WithOrigins(reactAppOriginQA)
                         .AllowAnyHeader()
                          .AllowAnyMethod();
                });

                options.AddPolicy("AllowReactApp-Prod", policy =>
                {
                    policy.WithOrigins(reactAppOriginProd)
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            var app = builder.Build();
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<AppDbContext>();
                context.Database.Migrate();
            }
            app.UseMiddleware<CorsLoggingMiddleware>();
            app.UseMiddleware<ExceptionHandlingMiddleware>();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (envRelease != "PROD")
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseRouting();
            app.UseHttpsRedirection();

            app.UseAuthorization();
            if (envRelease == "QA")
            {
                app.UseCors("AllowReactApp-Dev");
            }
            else
            {
                app.UseCors("AllowReactApp-Prod");
            }
                
            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
