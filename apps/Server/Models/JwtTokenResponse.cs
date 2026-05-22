namespace Server.Models;

public record JwtTokenResponse(string Token, DateTime? Expiration);
