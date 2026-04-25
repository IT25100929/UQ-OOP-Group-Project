package com.WebsiteBackend.TheRoyalPalms.Service;

import com.WebsiteBackend.TheRoyalPalms.Model.User;
import com.WebsiteBackend.TheRoyalPalms.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }
}