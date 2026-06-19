package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Room;
import com.WebsiteBackend.TheRoyalPalms.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody Room room) {
        try {
            Room savedRoom = roomRepository.save(room);
            return ResponseEntity.ok(savedRoom);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error creating room: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllRooms() {
        try {
            List<Room> allRooms = roomRepository.findAll();

            List<Room> sortedRooms = allRooms.stream()
                    .sorted(Comparator.comparingDouble(room -> {
                        try {
                            String cleanPrice = room.getPrice().replaceAll("[$,]", "").trim();
                            return Double.parseDouble(cleanPrice);
                        } catch (Exception e) {
                            return 0.0;
                        }
                    }))
                    .collect(Collectors.toList());

            return ResponseEntity.ok(sortedRooms);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching rooms: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRoomById(@PathVariable Long id) {
        try {
            Room room = roomRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Room not found with id: " + id));
            return ResponseEntity.ok(room);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching room: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable Long id) {
        try {
            return roomRepository.findById(id).map(room -> {
                roomRepository.delete(room);
                return ResponseEntity.ok().build();
            }).orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting room: " + e.getMessage());
        }
    }

    @PutMapping("/{id}/price")
    public ResponseEntity<?> updateRoomPrice(@PathVariable Long id, @RequestBody Room priceUpdateRequest) {
        try {
            return roomRepository.findById(id).map(room -> {
                String cleanPrice = priceUpdateRequest.getPrice().replaceAll("[$,]", "").trim();
                try {
                    double parsedPrice = Double.parseDouble(cleanPrice);
                    if (parsedPrice <= 0) {
                        return ResponseEntity.badRequest().<Room>build();
                    }
                } catch (NumberFormatException e) {
                    return ResponseEntity.badRequest().<Room>build();
                }

                room.setPrice(cleanPrice);
                Room updatedRoom = roomRepository.save(room);
                return ResponseEntity.ok(updatedRoom);
            }).orElse(ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating room price: " + e.getMessage());
        }
    }
}