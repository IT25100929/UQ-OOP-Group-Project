package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.User;
import com.WebsiteBackend.TheRoyalPalms.Model.LoginRequest; // Import the new DTO
import com.WebsiteBackend.TheRoyalPalms.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Matches your UserController port
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // Inject the same bean used in registration

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        return userRepository.findByEmail(loginRequest.getEmail())
                .map(user -> {
                    // Use matches() instead of equals()
                    // matches(rawPassword, encodedPassword)
                    if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
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