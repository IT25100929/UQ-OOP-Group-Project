package com.WebsiteBackend.TheRoyalPalms.Model;


import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "rooms")
@Data // Lombok: Generates Getters, Setters, ToString, etc.
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String price;

    @Column(length = 2000) // Ensures long descriptions don't get cut off
    private String description;

    private String imageUrl;

    @ElementCollection // Creates a 'room_amenities' table automatically
    private List<String> amenities;
}