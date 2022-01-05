using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Model
{
    public class AccountMongoDbSettings
    {
        public string AccountCollectionName = "Fondement_Securite";
        public string ConnectionString = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
        public string DatabaseName = "Account";
    }
}
