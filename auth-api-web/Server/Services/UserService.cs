using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Helpers;
using Server.Models;

namespace Server.Services;

public class UserService(AppDbContext context)
{
    public UserModel CreateUser(SignupRequest request)
    {
        (string username, string email, string password) = request;
        string encryptedPassword = PasswordHasher.Hash(password);
            
        var user = new UserModel(username, email, encryptedPassword);
        
        return user;
    }

    public async Task AddUserToDatabase(UserModel user)
    {
        await context.AddAsync(user);
        await context.SaveChangesAsync();
    }

    public async Task<UserModel?> GetUserByRequest(LoginRequest request)
    {
        (string identifier, string password) = request;

        var user = await context.Users.FirstOrDefaultAsync(x => x.Username == identifier || x.Email == identifier);

        if (user is null || !PasswordHasher.Verify(password, user.Password))
        {
            return null;
        }

        return user;
    }
}
