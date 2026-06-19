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

        try {
            if (booking.getCheckIn().isBefore(LocalDate.now())) {
                return ResponseEntity.badRequest().body("Check-in date cannot be in the past.");
            }

            if (booking.getCheckOut().isBefore(booking.getCheckIn().plusDays(1))) {
                return ResponseEntity.badRequest().body("Check-out must be after check-in.");
            }

            boolean isOccupied = bookingRepository.existsByRoomIdAndOverlap(
                    roomId, booking.getCheckIn(), booking.getCheckOut());

            if (isOccupied) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Room is already booked for these dates.");
            }

            booking.setRoomId(roomId);
            Booking savedBooking = bookingRepository.save(booking);
            return ResponseEntity.ok(savedBooking);

        } catch (NullPointerException e) {
            return ResponseEntity.badRequest().body("Check-in and Check-out dates are required.");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while creating the booking: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllBookings() {

        try {
            List<Booking> bookings = bookingRepository.findAll();
            return ResponseEntity.ok(bookings);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while fetching bookings: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {

        try {
            bookingRepository.deleteById(id);
            return ResponseEntity.ok("Booking deleted successfully.");

        } catch (org.springframework.dao.EmptyResultDataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Booking not found with ID: " + id);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while deleting the booking: " + e.getMessage());
        }
    }
}