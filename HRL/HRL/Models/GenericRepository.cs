using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRL.Models
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {

        private readonly HRLancerContext db;
        private DbSet<T> table;
        public GenericRepository(HRLancerContext dbContext)
        {
            db = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            table = db.Set<T>();
        }

        public IEnumerable<T> List
        {
            get
            {
                return table.ToList();
            }
        }

        public void Add(T entity)
        {
            table.Add(entity);
        }

        public void Delete(object id)
        {
            T entity = table.Find(id);
            table.Remove(entity);
        }

        public T FindById(object id)
        {
            T entity = table.Find(id);
            return entity;
        }

        public void Update(T entity)
        {
            db.Entry(entity).State = EntityState.Modified;
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}
