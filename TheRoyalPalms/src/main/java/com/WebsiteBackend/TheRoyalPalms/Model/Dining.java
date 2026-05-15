package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "dining")
@Data
public class Dining {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type; // e.g. International, Japanese Fusion

    @Column(length = 1500) // Increased length for longer descriptions
    private String description;

    private String imageUrl;
}