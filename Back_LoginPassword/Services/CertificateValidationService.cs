using System;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace Back.Services
{
    public class CertificateValidationService
    {
        public bool ValidateCertificate(X509Certificate2 clientCertificate)
        {
            //parent: D8EC407B0C890E158DB4112E2A88D9AB2DF6B018
            //enfant: B521E19F8568DDD69CA025118DC95B4883637C64
            string[] allowedThumbprints = { "B521E19F8568DDD69CA025118DC95B4883637C64" };
            if (allowedThumbprints.Contains(clientCertificate.Thumbprint))
            {
                return true;
            }

            return false;
        }
    }
}
