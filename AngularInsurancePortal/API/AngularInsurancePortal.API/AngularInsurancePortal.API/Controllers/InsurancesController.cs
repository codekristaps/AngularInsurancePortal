using AngularInsurancePortal.API.Data;
using AngularInsurancePortal.API.Models.Domain;
using AngularInsurancePortal.API.Models.DTO;
using AngularInsurancePortal.API.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularInsurancePortal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsurancesController : ControllerBase
    {
        private readonly IInsuranceRepository insuranceRepository;

        public InsurancesController(IInsuranceRepository insuranceRepository)
        {
            this.insuranceRepository = insuranceRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateInsurance(CreateInsuranceRequestDTO request)
        {
            // Map DTO to domain models
            var insurance = new Insurance
            {
                Name = request.Name,
                Description = request.Description
            };

            await insuranceRepository.CreateAsync(insurance);

            // Domain model to DTO
            var response = new InsuranceDto
            {
                Id = insurance.Id,
                Name = request.Name,
                Description = request.Description
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInsurances()
        {
            var insurances = await insuranceRepository.GetAllAsync();

            // map domain model to DTO
            var response = new List<InsuranceDto>();

            foreach (var insurance in insurances)
            {
                response.Add(new InsuranceDto
                {
                    Id = insurance.Id,
                    Name = insurance.Name,
                    Description = insurance.Description
                });
            }

            return Ok(response);
        }
    }
}
