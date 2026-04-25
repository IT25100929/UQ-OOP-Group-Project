package com.WebsiteBackend.TheRoyalPalms.Model;

import lombok.Data;

@Data // Lombok will generate getters/setters automatically
public class LoginRequest {
    private String email;
    private String password;
}