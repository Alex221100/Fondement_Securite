using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Back.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        public readonly CertificateValidationService _certificateValidation;
        [HttpGet]
        public bool Get()
        {
            return _certificateValidation.ValidateCertificate();
        }
    }
}

