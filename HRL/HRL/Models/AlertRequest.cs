using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class AlertRequest
    {
        public long AlertRequestId { get; set; }
        public long? UserId { get; set; }
        public DateTime? CreatedTime { get; set; }
        public bool? IsActivated { get; set; }
        public string JobTag { get; set; }
        public string Frequency { get; set; }
        public DateTime? TimeToSend { get; set; }
    }
}
