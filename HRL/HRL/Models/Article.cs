using System;
using System.Collections.Generic;

namespace HRL.Models
{
    public partial class Article
    {
        public long ArticleId { get; set; }
        public string Title { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string HtmlContent { get; set; }
        public string Note { get; set; }
    }
}
