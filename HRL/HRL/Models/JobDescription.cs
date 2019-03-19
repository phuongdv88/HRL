using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class JobDescription
    {
        public long JobDescriptionId { get; set; }
        public long? ClientId { get; set; }
        public string JobTitle { get; set; }
        public string JobCategory { get; set; }
        public bool? IsActive { get; set; }
        public string MapLink { get; set; }
        public string GradeLevel { get; set; }
        public string JobType { get; set; }
        public string Brief { get; set; }
        public string Description { get; set; }
        public string Benefit { get; set; }
        public string Requirement { get; set; }
        public DateTime? ExpiredDate { get; set; }
        public string Note { get; set; }
        public string Employer { get; set; }
        public string Location { get; set; }
        public string Salary { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string LogoLink { get; set; }
        public string Tag { get; set; }
        public string MinSalary { get; set; }
        public string MaxSalary { get; set; }
        public string AttachmentLink { get; set; }
        public string AttachmentFileName { get; set; }
    }
}
