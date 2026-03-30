package com.hotel.model;

// Inheritance example
public class Admin extends User {
    public Admin(String id, String username, String password) {
        super(id, username, password, "ADMIN");
    }
}