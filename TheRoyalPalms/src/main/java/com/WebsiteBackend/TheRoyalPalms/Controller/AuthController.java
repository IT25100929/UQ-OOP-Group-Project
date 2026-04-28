package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.User;
import com.WebsiteBackend.TheRoyalPalms.Model.LoginRequest; // Import the new DTO
import com.WebsiteBackend.TheRoyalPalms.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Matches your UserController port
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        return userRepository.findByEmail(loginRequest.getEmail())
                .map(user -> {
                    // Direct plain text comparison
                    if (user.getPassword().equals(loginRequest.getPassword())) {
                        Map<String, Object> response = new HashMap<>();
                        response.put("token", "dummy-jwt-token");
                        response.put("role", user.getRole());
                        response.put("id", user.getId());
                        return ResponseEntity.ok(response);
                    }
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
                })
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found"));
    }
}