package com.WebsiteBackend.TheRoyalPalms.Controller;


import com.WebsiteBackend.TheRoyalPalms.Model.Reservation;
import com.WebsiteBackend.TheRoyalPalms.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping
    public ResponseEntity<?> createReservation(@RequestBody Reservation reservation) {
        // 1. Validate Date
        if (reservation.getDate().isBefore(LocalDate.now())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Date cannot be in the past."));
        }

        // 2. Validate Time (if today)
        if (reservation.getDate().isEqual(LocalDate.now())) {
            LocalTime reservationTime = LocalTime.parse(reservation.getTime());
            if (reservationTime.isBefore(LocalTime.now())) {
                return ResponseEntity.badRequest().body(Map.of("message", "Selected time has already passed."));
            }
        }

        // 3. Simple Email Regex Check (Optional if you use @Email in Model)
        if (!reservation.getEmail().contains("@")) {
            return ResponseEntity.badRequest().body(Map.of("message", "Invalid email format."));
        }

        Reservation savedReservation = reservationRepository.save(reservation);
        return ResponseEntity.ok(savedReservation);
    }

    // NEW: Get all reservations for the Admin Dashboard
    @GetMapping("/all")
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // NEW: Delete a reservation
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable Long id) {
        if (!reservationRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        reservationRepository.deleteById(id);
        return ResponseEntity.ok("Reservation deleted successfully");
    }
}