using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Client
    {
        public long ClientId { get; set; }
        public string PacketType { get; set; }
        public long? Amount { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }
        public string GeneralInfo { get; set; }
        public string AboutMe { get; set; }
        public string OfficePhoneNumber { get; set; }
        public string Country { get; set; }
        public string Size { get; set; }
        public float? Rating { get; set; }
        public string LogoLink { get; set; }
        public int? NumberOfJd { get; set; }
        public string AccountType { get; set; }
        public bool? IsVerified { get; set; }
        public bool? IsInBlackList { get; set; }
    }
}
