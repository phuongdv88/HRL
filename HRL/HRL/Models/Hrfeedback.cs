using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Hrfeedback
    {
        public long HrfeedbackId { get; set; }
        public long? ClientId { get; set; }
        public long? Hrid { get; set; }
        public int? Rating { get; set; }
        public string Comment { get; set; }
        public string FeedbackType { get; set; }
        public bool? Activated { get; set; }
    }
}
