using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class LoginAccount
    {
        public long LoginAccountId { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityStamp { get; set; }
        public string Role { get; set; }
        public int? AccessFailedCount { get; set; }
        public bool? LockoutEnabled { get; set; }
        public DateTime? LockoutDateUtc { get; set; }
    }
}
