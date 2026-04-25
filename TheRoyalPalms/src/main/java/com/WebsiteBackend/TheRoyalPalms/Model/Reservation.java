package com.WebsiteBackend.TheRoyalPalms.Model;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reservations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long restaurantId;
    private String restaurantName;
    private LocalDate date;
    private String time;
    private Integer guests;
    private String name;
    private String email;

    @Column(columnDefinition = "TEXT")
    private String requests;
}