using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StWarStudios.Data.Entities;

namespace StWarStudios.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<UserRequest> UserRequests { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    string? connectionString = _configuration.GetConnectionString("DefaultConnection");
            
        //    optionsBuilder.UseSqlServer(connectionString);
        //}
        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Add automatic entities configurations
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
            modelBuilder.Entity<Contact>().Property(b => b.Id).HasDefaultValueSql("NEWID()");
            modelBuilder.Entity<Contact>().Property(b => b.CreationDate).HasDefaultValueSql("GETUTCDATE()");
            modelBuilder.Entity<UserRequest>().Property(b => b.CreationDate).HasDefaultValueSql("GETUTCDATE()");
            modelBuilder.Entity<UserRequest>().Property(b => b.Count).HasDefaultValueSql("1");
            modelBuilder.Entity<UserRequest>().Property(b => b.Id).HasDefaultValueSql("NEWID()");
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
