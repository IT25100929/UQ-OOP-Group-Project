package com.WebsiteBackend.TheRoyalPalms.Controller;


import com.WebsiteBackend.TheRoyalPalms.Model.Reservation;
import com.WebsiteBackend.TheRoyalPalms.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping
    public ResponseEntity<Reservation> createReservation(@RequestBody Reservation reservation) {
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