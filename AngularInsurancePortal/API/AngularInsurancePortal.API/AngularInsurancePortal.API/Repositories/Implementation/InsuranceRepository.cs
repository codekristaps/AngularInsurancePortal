using AngularInsurancePortal.API.Data;
using AngularInsurancePortal.API.Models.Domain;
using AngularInsurancePortal.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace AngularInsurancePortal.API.Repositories.Implementation
{
    public class InsuranceRepository : IInsuranceRepository
    {
        private readonly ApplicationDbContext dbContext;

        public InsuranceRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Insurance> CreateAsync(Insurance insurance)
        {
            await dbContext.Insurances.AddAsync(insurance);
            await dbContext.SaveChangesAsync();

            return insurance;
        }

        public async Task<IEnumerable<Insurance>> GetAllAsync()
        {
            return await dbContext.Insurances.ToListAsync();
        }
    }
}
