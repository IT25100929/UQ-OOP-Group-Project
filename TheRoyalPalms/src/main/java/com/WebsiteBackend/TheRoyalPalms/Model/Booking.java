package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import java.time.LocalDate;


@Entity
@Table(name = "bookings")
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long roomId; // Links the booking to a specific room
    private String guestName;
    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email cannot be empty")
    private String guestEmail;
    private LocalDate checkIn;
    private LocalDate checkOut;
}