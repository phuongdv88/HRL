using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class SystemLog
    {
        public long SystemLogId { get; set; }
        public long? SpecialistId { get; set; }
        public string ActionType { get; set; }
        public DateTime? ActionTime { get; set; }
        public string Note { get; set; }
    }
}
