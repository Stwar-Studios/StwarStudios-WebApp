using Microsoft.EntityFrameworkCore;
using StWarStudios.Data.Entities;
using System.Data;

namespace StWarStudios.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }


        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Add automatic entities configurations
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }


        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            // Optimistic Concurrency
            // Blocks the record when is changing and avoid upcoming changes until is freed (saved)
            try
            {
                var result = await base.SaveChangesAsync(cancellationToken);

                return result;
            }
            // Handling Concurrency exceptions
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
        }
    }
}
