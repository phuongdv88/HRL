using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Applicant
    {
        public long ApplicantId { get; set; }
        public long? CandidateId { get; set; }
        public long? Hrid { get; set; }
        public long? JobDescriptionId { get; set; }
        public long? ClientId { get; set; }
        public string Address { get; set; }
        public string CoverLetter { get; set; }
        public string ResumeLink { get; set; }
        public string Status { get; set; }
        public DateTime? ReferedTime { get; set; }
        public DateTime? UpdatedTime { get; set; }
    }
}
