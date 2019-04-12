using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HRL.Models;
using Contracts;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HRL.Controllers
{
    [Route("api/[controller]")]
    public class ClientController : Controller
    {
        //ClientDAL clientDAL;
        private IGenericRepository<Client> repository;
        private ILoggerManager logger;
        public ClientController(HRLancerContext context, ILoggerManager logger)
        {
            repository = new GenericRepository<Client>(context);
            this.logger = logger;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Client> Index()
        {
            logger.LogInfo("info");
            logger.LogDebug("Debug");
            logger.LogWarn("warn");
            logger.LogError("error");
            return repository.List;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Client Details(long id)
        {
            return repository.FindById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public long Create(Client cl)
        {
            cl.CreatedTime = DateTime.UtcNow;
            repository.Add(cl);
            repository.Save();
            return cl.ClientId;
        }

        // PUT api/<controller>
        [HttpPut]
        public void Edit(Client cl)
        {
            repository.Update(cl);
            repository.Save();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            repository.Delete(id);
            repository.Save();
        }
    }
}
