package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.MaintenanceIssue;
import com.WebsiteBackend.TheRoyalPalms.Repository.MaintenanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
@CrossOrigin(origins = "http://localhost:5173")
public class MaintenanceController {

    @Autowired
    private MaintenanceRepository maintenanceRepository;

    @PostMapping
    public MaintenanceIssue reportIssue(@RequestBody MaintenanceIssue issue) {
        return maintenanceRepository.save(issue);
    }

    @GetMapping
    public List<MaintenanceIssue> getAllIssues() {
        return maintenanceRepository.findAll();
    }
}