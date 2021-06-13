using Microsoft.EntityFrameworkCore;

namespace ElectronixStoreWeb.Database
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>(builder =>
            {
                builder.HasKey(x => x.Id);
                builder.Property(x => x.Id).ValueGeneratedOnAdd();
            });
        }
    }
}
