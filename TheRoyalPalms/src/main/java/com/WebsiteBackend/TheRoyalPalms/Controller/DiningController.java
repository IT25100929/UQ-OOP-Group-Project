package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Dining;
import com.WebsiteBackend.TheRoyalPalms.Repository.DiningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dining")
@CrossOrigin(origins = "http://localhost:5173")
public class DiningController {

    @Autowired
    private DiningRepository diningRepository;

    @GetMapping
    public List<Dining> getAllDiningOptions() {
        try {
            return diningRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return List.of();
        }
    }

    @PostMapping
    public Dining addDiningOption(@RequestBody Dining dining) {
        try {
            return diningRepository.save(dining);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/{id}")
    public Dining getDiningById(@PathVariable Long id) {
        try {
            return diningRepository.findById(id).orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDiningOption(@PathVariable Long id) {
        try {
            if (!diningRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            diningRepository.deleteById(id);
            return ResponseEntity.ok("Dining venue deleted successfully");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError()
                    .body("An error occurred while deleting the dining venue");
        }
    }
}