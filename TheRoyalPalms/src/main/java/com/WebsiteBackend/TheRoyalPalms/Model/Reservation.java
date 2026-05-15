package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
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

    @FutureOrPresent(message = "Date must be today or in the future")
    private LocalDate date;

    @NotBlank(message = "Time is required")
    private String time;

    @Min(value = 1, message = "At least 1 guest required")
    private Integer guests;

    @NotBlank(message = "Name is required")
    private String name;

    @Email(message = "Invalid email format")
    private String email;

    @Column(columnDefinition = "TEXT")
    private String requests;
}