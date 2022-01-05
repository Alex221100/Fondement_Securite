using Back.Controllers.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Model.Interfaces
{
    public interface IAuthenticationService
    {
        public void CreateAccount(User userInfo);

        public string Login(User userInfo);

        public void Logout(string token);
    }
}
