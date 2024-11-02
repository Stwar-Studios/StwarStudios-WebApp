namespace StWarStudios.Web.Server.Models
{
    public class ApiResponse
    {
        public int Code { get; set; }
        public bool Success { get; set; }
        public string? Message { get; set; } = "OK";
    }

    public class ApiResponse<T> : ApiResponse
    {
        public T? Data { get; set; }
        public string ContentType{ get; } = typeof(T).Name;
    }
}
