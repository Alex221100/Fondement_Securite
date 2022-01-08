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
        [HttpGet]
        [Route("certificate")]
        public IActionResult GetCertificateValidation()
        {
            return Ok("ok");
        }

    }
}

