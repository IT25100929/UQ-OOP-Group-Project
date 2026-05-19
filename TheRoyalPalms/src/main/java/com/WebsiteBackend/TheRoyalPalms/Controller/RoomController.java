package com.WebsiteBackend.TheRoyalPalms.Controller;


import com.WebsiteBackend.TheRoyalPalms.Model.Room;
import com.WebsiteBackend.TheRoyalPalms.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;


    @PostMapping
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }


    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }


    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRoom(@PathVariable Long id) {
        return roomRepository.findById(id).map(room -> {
            roomRepository.delete(room);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}/price")
    public ResponseEntity<Room> updateRoomPrice(@PathVariable Long id, @RequestBody Room priceUpdateRequest) {
        return roomRepository.findById(id).map(room -> {
            // Server-side baseline validation
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
    }
}
