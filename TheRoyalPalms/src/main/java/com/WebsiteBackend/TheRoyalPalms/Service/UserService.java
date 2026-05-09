package com.WebsiteBackend.TheRoyalPalms.Service;

import com.WebsiteBackend.TheRoyalPalms.Model.User;
import com.WebsiteBackend.TheRoyalPalms.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        // Encrypt the plain text password from the React frontend
        String encodedPassword = passwordEncoder.encode(user.getPassword());

        // Replace the plain text with the hashed version
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }
}