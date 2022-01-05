using Back.Model;
using Back.Model.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Repositories
{
    public class MongoDbRepository : IMongoDbRepository
    {
        private readonly IMongoCollection<Account> _accounts;

        public MongoDbRepository(AccountMongoDbSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _accounts = database.GetCollection<Account>(settings.AccountCollectionName);
        }

        public void Create(Account account)
        {
            _accounts.InsertOne(account);
        }

        public bool FindByUsernameAndPassword(string username, string password)
        {
            if (_accounts.Find<Account>(account => account.Username == username && account.Password == password).FirstOrDefault() is not null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void DeleteToken(string token)
        {
            
        }
    }
}
