using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRL.Models
{
    public interface IGenericRepository<T> where T: class
    {
        IEnumerable<T> List { get; }
        void Add(T entity);
        void Update(T entity);

        void Delete(object id);
        T FindById(object id);
        void Save();

    }
}
