using System.ComponentModel.DataAnnotations;

namespace StWarStudios.Web.Server.Models
{
    public class ContactModel
    {
        public Guid? Id { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.UtcNow;
        public DateTime? ModifyDate { get; set; }
        public DateTime? DeleteDate { get; set; }

        [MaxLength(100)]
        public string? Name { get; set; }
        [EmailAddress(ErrorMessage = "Invalid email format")]
        [MaxLength(100)]
        public string? Email { get; set; }
        [MaxLength(50)]
        public string? Phone { get; set; }
        [MaxLength(100)]
        [Required]
        public string? Topic { get; set; }
        [Required]
        [MaxLength(1000)]
        public string? Message { get; set; }    
    }
}
