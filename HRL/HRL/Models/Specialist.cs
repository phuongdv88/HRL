using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Specialist
    {
        public long SpecialistId { get; set; }
        public string Role { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public long? LoginAccountId { get; set; }
        public string PhoneNumber { get; set; }
    }
}
