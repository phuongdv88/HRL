using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HRL.Models
{
    public class LoginAccountDAL
    {
        HRLancerContext db;

        public LoginAccountDAL(HRLancerContext context)
        {
            db = context ?? throw new ArgumentNullException(nameof(context));
        }

        public IEnumerable<LoginAccount> GetAllLoginAccounts()
        {
            try
            {
                return db.LoginAccount.ToList();
            }
            catch 
            {

                throw;
            }
        }

        public LoginAccount GetLoginAccounts(long id)
        {
            try
            {
                return db.LoginAccount.Find(id);
            }
            catch
            {

                throw;
            }
        }


        // add New Login Account
        public long AddLoginAccount(LoginAccount account)
        {
            try
            {
                db.LoginAccount.Add(account);
                db.SaveChangesAsync();
                return account.LoginAccountId;
            }
            catch 
            {

                throw;
            }
        }

        public long UpdatePassword(LoginAccount account)
        {
            try
            {
                var ac = db.LoginAccount.Find(account.LoginAccountId);
                if(ac != null)
                {
                    ac.SecurityStamp = account.SecurityStamp;
                    ac.PasswordHash = account.PasswordHash;
                }

                db.Entry(ac).State = EntityState.Modified;
                return db.SaveChanges();
            }
            catch
            {

                throw;
            }
        }

        public long updateLoginAccount(LoginAccount account)
        {
            try
            {
                db.Entry(account).State = EntityState.Modified;
                return db.SaveChanges();
            }
            catch
            {

                throw;
            }
        }

        public long DeleteLoginAccount(long id)
        {
            try
            {
                var ac = db.LoginAccount.Find(id);
                db.LoginAccount.Remove(ac);
                return db.SaveChanges();
            }
            catch 
            {

                throw;
            }
        }

    }
}
