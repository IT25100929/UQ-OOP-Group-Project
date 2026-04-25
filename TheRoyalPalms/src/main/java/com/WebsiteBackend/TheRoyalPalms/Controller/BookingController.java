package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Booking;
import com.WebsiteBackend.TheRoyalPalms.Repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173") // Adjust port to match your React app
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/{roomId}")
    public Booking createBooking(@PathVariable Long roomId, @RequestBody Booking booking) {
        booking.setRoomId(roomId);
        return bookingRepository.save(booking);
    }
}