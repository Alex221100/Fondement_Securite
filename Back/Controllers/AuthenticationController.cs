using System;
using System.Security.Cryptography.X509Certificates;
using Back.Services;
using Microsoft.AspNetCore.Mvc;

namespace Back.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        public readonly CertificateValidationService _certificateValidation;

        public AuthenticationController(CertificateValidationService certificateValidation)
        {
            _certificateValidation = certificateValidation ?? throw new ArgumentNullException(nameof(certificateValidation));
        }

        [HttpGet]
        [Route("certificate")]
        public bool GetCertificateValidation()
        {
            return true;
            //return _certificateValidation.ValidateCertificate(certificate);

        }

    }
}

