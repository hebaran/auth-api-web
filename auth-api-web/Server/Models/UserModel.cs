namespace Server.Models;

public class UserModel
{
    public Guid Id { get; init; }
    public string Username { get; private set; }
    public string Email { get; private set; }
    public string Password { get; private set; }

    public  UserModel(string username, string email, string password)
    {
        Id = Guid.NewGuid();
        Username = username;
        Email = email;
        Password = password;
    }
}
