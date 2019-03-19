using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Candidate
    {
        public long CandidateId { get; set; }
        public long? Hrid { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string CurrentJobTitle { get; set; }
        public string ResumeLink { get; set; }
        public string Information { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public bool? CanRelocate { get; set; }
        public bool? Gender { get; set; }
    }
}
