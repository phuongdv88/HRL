using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HRL.Models
{
    public class ClientDAL
    {
        private readonly HRLancerContext db;
        public ClientDAL(HRLancerContext dbContext)
        {
            db = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }
        public IEnumerable<Client> GetAllClients()
        {
            try
            {
                return db.Client.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record     
        public int AddClient(Client client)
        {
            try
            {
                client.CreatedTime = DateTime.Now;
                db.Client.Add(client);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee    
        public int UpdateClient(Client client)
        {
            try
            {
                db.Entry(client).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee    
        public Client GetClientData(long id)
        {
            try
            {
                Client employee = db.Client.Find(id);
                return employee;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee    
        public int DeleteClient(long id)
        {
            try
            {
                Client cl = db.Client.Find(id);
                db.Client.Remove(cl);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }
}
