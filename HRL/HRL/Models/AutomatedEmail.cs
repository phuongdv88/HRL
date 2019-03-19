using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class AutomatedEmail
    {
        public long AutomatedEmailId { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string EmailFrom { get; set; }
        public string EmailTo { get; set; }
        public string Title { get; set; }
        public string EmailContent { get; set; }
        public string SendingResult { get; set; }
    }
}
