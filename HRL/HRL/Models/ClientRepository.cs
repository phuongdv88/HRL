using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRL.Models
{
    public class ClientRepository : IGenericRepository<Client>
    {
        private readonly HRLancerContext db;
        public ClientRepository(HRLancerContext dbContext)
        {
            db = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        public IEnumerable<Client> List
        {
            get
            {
                return db.Client;
            }
        }

        public void Add(Client entity)
        {
            try
            {
                entity.CreatedTime = DateTime.Now;
                db.Client.Add(entity);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void Delete(object id)
        {
            try
            {
                Client cl = db.Client.Find(id);
                db.Client.Remove(cl);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public Client FindById(object id)
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

        public void Update(Client entity)
        {
            try
            {
                db.Entry(entity).State = EntityState.Modified;
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}
