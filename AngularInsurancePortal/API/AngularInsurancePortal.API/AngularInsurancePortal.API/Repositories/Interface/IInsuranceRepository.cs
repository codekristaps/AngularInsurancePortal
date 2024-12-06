using AngularInsurancePortal.API.Models.Domain;

namespace AngularInsurancePortal.API.Repositories.Interface
{
    public interface IInsuranceRepository
    {
        Task<Insurance> CreateAsync(Insurance insurance);
    }
}
