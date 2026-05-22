using Server.Models;
using Server.Services;

namespace Server.Routes;

public static class AuthRoute
{
    public static void AuthRoutes(this WebApplication app)
    {
        var authRoute = app.MapGroup("/auth");

        authRoute.MapPost("/login", async (HttpContext context, LoginRequest request, UserService userService, AuthService authService) =>
        {
            var user = await userService.GetUserByRequest(request);

            if (user is null)
            {
                return Results.Unauthorized();
            }

            var jwt = authService.JwtGenerate(user.Username, user.Id);

            context.Response.Cookies.Append("authToken", jwt.Token, new CookieOptions { HttpOnly = true, Secure = false, SameSite = SameSiteMode.Strict, Expires = jwt.Expiration }); // https: Secure = true

            return Results.Ok(new { message = "Login realizado" });
        });
    }
}
