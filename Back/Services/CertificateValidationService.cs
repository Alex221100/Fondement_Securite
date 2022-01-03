using System;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace Back.Services
{
    public class CertificateValidationService
    {
        public bool ValidateCertificate(X509Certificate2 clientCertificate)
        {
            string[] allowedThumbprints = { "21A6E47A962C0E80A59517691FFA1D0500E3E548", "87A6E47A962C0E80A59517691FFA1D0500E3E548", "78A6E47A962C0E80A59517691FFA1D0500E3E548" };
            if (allowedThumbprints.Contains(clientCertificate.Thumbprint))
            {
                return true;
            }

            return false;
        }
    }
}
