using AutoMapper;
using StWarStudios.Data.Entities;
using StWarStudios.Web.Server.Models;

namespace StWarStudios.Web.Server.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Contact, ContactModel>().ReverseMap();
            CreateMap<Contact, ContactCreationModel>().ReverseMap();            
        }
    }

}
