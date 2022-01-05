using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Back.Controllers.Model;
using Back.Model;
using Back.Model.Interfaces;
using Back.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Back.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        //public readonly CertificateValidationService _certificateValidation;
        public readonly IAuthenticationService _authenticationService;

        /*CertificateValidationService certificateValidation,*/
        public AuthenticationController(IAuthenticationService authenticationService)
        {
            //_certificateValidation = certificateValidation ?? throw new ArgumentNullException(nameof(certificateValidation));
            _authenticationService = authenticationService ?? throw new ArgumentNullException(nameof(authenticationService));
        }

        [HttpGet]
        public string Get()
        {
            return "Welcome to Narnia";
        }

        [HttpPost]
        [Route("createaccount")]
        public void PostAccount(User userInfo)
        {
            _authenticationService.CreateAccount(userInfo);
        }

        [HttpGet]
        [Route("login")]
        public string Login(User userInfo)
        {
            return _authenticationService.Login(userInfo);
        }

        [HttpPost]
        [Route("logout")]
        public void Logout(string token)
        {
            _authenticationService.Logout(token);
        }
    }
}

