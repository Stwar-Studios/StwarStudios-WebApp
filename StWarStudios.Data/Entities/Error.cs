using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StWarStudios.Data.Entities
{
    public class Error 
    {
        [Key]
        public Guid Id { get; set; }
        public string? Type { get; set; }
        public string? Action { get; set; }
        public string Message { get; set; }
        public string Description { get; set; }
        public string Details { get; set; }

        public DateTime? CreationDate { get; set; }


        [ForeignKey(nameof(UserRequest))]
        public Guid? UserRequestID { get; set; }
        public UserRequest? UserRequest { get; set; }

    }
}
