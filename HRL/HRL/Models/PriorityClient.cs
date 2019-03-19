using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class PriorityClient
    {
        public long PriorityClientId { get; set; }
        public string Type { get; set; }
        public long? ClientId { get; set; }
        public string ClientGroup { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public bool? IsActive { get; set; }
        public DateTime? ExpiredTime { get; set; }
    }
}
