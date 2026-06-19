package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Staff;
import com.WebsiteBackend.TheRoyalPalms.Repository.StaffRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin(origins = "http://localhost:5173")
public class StaffController {

    @Autowired
    private StaffRepository staffRepository;

    @GetMapping
    public List<Staff> getAllStaff() {
        try {
            return staffRepository.findAll();
        } catch (Exception e) {
            
            throw new RuntimeException("Failed to fetch staff list", e);
        }
    }

    @PostMapping
    public Staff addStaff(@Valid @RequestBody Staff staff) {
        try {
            return staffRepository.save(staff);
        } catch (Exception e) {
            throw new RuntimeException("Failed to save staff member", e);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteStaff(@PathVariable Long id) {
        try {
            staffRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete staff member with ID: " + id, e);
        }
    }
}