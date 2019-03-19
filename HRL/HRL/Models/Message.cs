using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Message
    {
        public long MessageId { get; set; }
        public long? Hrid { get; set; }
        public long? ClientId { get; set; }
        public string MessageContent { get; set; }
        public DateTime? SentTime { get; set; }
        public string MessageFrom { get; set; }
        public string Status { get; set; }
    }
}
