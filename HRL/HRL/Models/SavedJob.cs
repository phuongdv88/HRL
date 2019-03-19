using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class SavedJob
    {
        public long SavedJobId { get; set; }
        public string JobTitle { get; set; }
        public string ExpiredDate { get; set; }
        public long? JobDescriptionId { get; set; }
        public long? Hrid { get; set; }
        public string Link { get; set; }
    }
}
