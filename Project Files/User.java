package com.hotel.model;

// Abstract Base Class (Abstraction)
public abstract class User {
    private String id;
    private String username;
    private String password;
    private String role;

    public User(String id, String username, String password, String role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // Encapsulation: Getters and Setters
    public String getId() { return id; }
    public String getUsername() { return username; }
    public String getRole() { return role; }

    @Override
    public String toString() {
        return id + "," + username + "," + password + "," + role;
    }
}
