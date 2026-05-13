using Isopoh.Cryptography.Argon2;

namespace Server.Services;

public static class EncryptPasswordService
{
    public static string EncryptPassword(string password)
    {
        return Argon2.Hash(password);
    }

    public static bool VerifyPassword(string password, string hash)
    {
        return Argon2.Verify(hash, password);
    }
}
