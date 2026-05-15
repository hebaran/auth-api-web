using Server.Models;
using Server.Services;

namespace Server.Routes;

public static class AuthRoute
{
    public static void AuthRoutes(this WebApplication app)
    {
        var authRoute = app.MapGroup("/auth");

        authRoute.MapPost("/login", async (LoginRequest request, UserService userService, AuthService authService) =>
        {
            var user = await userService.GetUserByRequest(request);

            return user is not null ? Results.Ok(authService.JwtGenerate(user.Username, user.Id)) : Results.Unauthorized();
        });
    }
}
