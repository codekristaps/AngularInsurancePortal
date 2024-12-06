using AngularInsurancePortal.API.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace AngularInsurancePortal.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Insurance> Insurances { get; set; }
    }
}
