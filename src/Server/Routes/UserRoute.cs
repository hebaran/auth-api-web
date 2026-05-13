using Server.Models;
using Server.Services;

namespace Server.Routes;

public static class UserRoute
{
    public static void UserRoutes(this WebApplication app)
    {
        var usersRoute = app.MapGroup("/users");

        usersRoute.MapPost("/", async (SignupRequest request, UserService userService) =>
        {
            var user = userService.CreateUser(request);
            await userService.AddUserToDatabase(user);

            return Results.Created($"/{user.Username}", user);
        });
    }
}