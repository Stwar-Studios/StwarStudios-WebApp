using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StWarStudios.Data.Entities
{
    public class UserRequest
    {
        [Key]
        public Guid Id { get; set; }

        [MaxLength(20)]
        public string? UserIp { get; set; }

        public int Count{ get; set; } = 0;

        public DateTime CreationDate { get; set; }

        public Guid? ObjectId { get; set; }
    }
}
