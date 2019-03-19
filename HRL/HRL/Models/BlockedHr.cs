using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class BlockedHr
    {
        public long BlockedHrid { get; set; }
        public long? ClientId { get; set; }
        public long? Hrid { get; set; }
        public DateTime? CreateTime { get; set; }
    }
}
