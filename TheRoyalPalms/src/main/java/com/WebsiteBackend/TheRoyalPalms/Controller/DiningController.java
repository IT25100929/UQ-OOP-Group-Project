package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Dining;
import com.WebsiteBackend.TheRoyalPalms.Repository.DiningRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        return diningRepository.findAll();
    }

    @PostMapping
    public Dining addDiningOption(@RequestBody Dining dining) {
        return diningRepository.save(dining);
    }

    @GetMapping("/{id}")
    public Dining getDiningById(@PathVariable Long id) {
        return diningRepository.findById(id).orElse(null);
    }
}