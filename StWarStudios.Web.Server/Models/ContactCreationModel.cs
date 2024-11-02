using System.ComponentModel.DataAnnotations;

namespace StWarStudios.Web.Server.Models
{
    public class ContactCreationModel
    {
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

        [Required]
        [MaxLength(20)]
        public string? UserPublicIP { get; set;}
    }    
}
