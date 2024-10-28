using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StWarStudios.Data.Entities
{
    public interface IDbEntity
    {
        Guid Id { get; set; }
        DateTime CreationDate { get; set; }
        DateTime? ModifyDate { get; set; }
        DateTime? DeleteDate { get; set; }
    }
}
