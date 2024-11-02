using StWarStudios.Web.Server.Models;

namespace StWarStudios.Web.Server.ApiUtilities
{
    public static class ApiResponseUtility
    {
        public static ApiResponse Success()
        {
            return new ApiResponse
            {
                Code = 200,
                Success = true,
                Message = "Operation completed successfully."
            };
        }

        public static ApiResponse<T> Success<T>(T data)
        {
            return new ApiResponse<T>
            {
                Code = 200,
                Success = true,
                Message = "Operation completed successfully.",
                Data = data
            };
        }

        public static ApiResponse NotFound()
        {
            return new ApiResponse
            {
                Code = 404,
                Success = false,
                Message = "Resource not found."
            };
        }

        public static ApiResponse<T> NotFound<T>()
        {
            return new ApiResponse<T>
            {
                Code = 404,
                Success = false,
                Message = "Resource not found."
            };
        }

        public static ApiResponse Error(string errorMessage)
        {
            return new ApiResponse
            {
                Code = 500,
                Success = false,
                Message = errorMessage
            };
        }

        public static ApiResponse<T> Error<T>(string errorMessage)
        {
            return new ApiResponse<T>
            {
                Code = 500,
                Success = false,
                Message = errorMessage
            };
        }
    }
}