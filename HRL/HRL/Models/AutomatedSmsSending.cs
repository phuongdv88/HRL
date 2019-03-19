using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class AutomatedSmsSending
    {
        public long SmsSendingId { get; set; }
        public string PhoneNumber { get; set; }
        public string Message { get; set; }
        public string Status { get; set; }
        public DateTime? TimeToSend { get; set; }
    }
}
