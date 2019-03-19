using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Requirement
    {
        public long RequirementId { get; set; }
        public long? ClientId { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? ExpiredTime { get; set; }
        public string RequirementType { get; set; }
        public string Comment { get; set; }
        public bool? IsActivated { get; set; }
        public bool? IsFinish { get; set; }
        public DateTime? FinishTime { get; set; }
    }
}
