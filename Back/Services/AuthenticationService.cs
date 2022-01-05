using Back.Controllers.Model;
using Back.Model;
using Back.Model.Interfaces;
using Back.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IMongoDbRepository _mongoDbRepository;

        public AuthenticationService(MongoDbRepository mongoDbRepository)
        {
            _mongoDbRepository = _mongoDbRepository ?? throw new ArgumentNullException(nameof(mongoDbRepository));
        }

        public void CreateAccount(User userInfo)
        { 
            Account account = new Account
            {
                Username = userInfo.Username,
                Password = userInfo.Password,
            };

            _mongoDbRepository.Create(account);
        }

        public string Login(User userInfo)
        {
            Account account = new Account
            {
                Username = userInfo.Username,
                Password = userInfo.Password,
            };

            if (_mongoDbRepository.FindByUsernameAndPassword(account.Username, account.Password) == true){
                //création d'un token

            }
            return "";
        }

        public void Logout(string token)
        {

        }
    }
}
