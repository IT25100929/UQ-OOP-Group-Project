package com.WebsiteBackend.TheRoyalPalms.Controller;


import com.WebsiteBackend.TheRoyalPalms.Model.User;
import com.WebsiteBackend.TheRoyalPalms.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User signUp(@RequestBody User user) {
        return userService.registerUser(user);
    }
}