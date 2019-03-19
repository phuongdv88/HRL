using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HRL.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HRL.Controllers
{
    [Route("api/[controller]")]
    public class ClientController : Controller
    {
        ClientDAL clientDAL;
        public ClientController(HRLancerContext context)
        {
            clientDAL = new ClientDAL(context);
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Client> Index()
        {
            return clientDAL.GetAllClients();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public Client Details(long id)
        {
            return clientDAL.GetClientData(id);
        }

        // POST api/<controller>
        [HttpPost]
        public long Create(Client cl)
        {
            return clientDAL.AddClient(cl);
        }

        // PUT api/<controller>
        [HttpPut]
        public int Edit(Client cl)
        {
            return clientDAL.UpdateClient(cl);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public int Delete(long id)
        {
            return clientDAL.DeleteClient(id);
        }
    }
}
