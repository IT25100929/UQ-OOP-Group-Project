package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Booking;
import com.WebsiteBackend.TheRoyalPalms.Repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/{roomId}")
    public ResponseEntity<?> createBooking(@PathVariable Long roomId, @RequestBody Booking booking) {

        // 1. Basic Date Logic Check
        if (booking.getCheckIn().isBefore(LocalDate.now())) {
            return ResponseEntity.badRequest().body("Check-in date cannot be in the past.");
        }

        if (booking.getCheckOut().isBefore(booking.getCheckIn().plusDays(1))) {
            return ResponseEntity.badRequest().body("Check-out must be after check-in.");
        }

        // 2. Overlap Check (Requires a custom method in Repository)
        boolean isOccupied = bookingRepository.existsByRoomIdAndOverlap(
                roomId, booking.getCheckIn(), booking.getCheckOut());

        if (isOccupied) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Room is already booked for these dates.");
        }

        booking.setRoomId(roomId);
        Booking savedBooking = bookingRepository.save(booking);
        return ResponseEntity.ok(savedBooking);
    }

    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // NEW: Delete a booking
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingRepository.deleteById(id);
    }
}