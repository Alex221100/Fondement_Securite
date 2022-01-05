using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Model.Interfaces
{
    public interface IMongoDbRepository
    {
        public void Create(Account account);

        public bool FindByUsernameAndPassword(string username, string password);
    }
}
