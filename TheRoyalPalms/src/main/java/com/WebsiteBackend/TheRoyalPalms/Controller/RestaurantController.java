package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.MenuItem;
import com.WebsiteBackend.TheRoyalPalms.Model.OrderDetails;
import com.WebsiteBackend.TheRoyalPalms.Service.RestaurantService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RestaurantController {

    @Autowired
    private RestaurantService service;

    @GetMapping("/menu")
    public List<MenuItem> getMenu() {
        return service.getAllMenuItems();
    }

    @DeleteMapping("/menu/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id) {
        service.deleteMenuItem(id);
        return ResponseEntity.noContent().build();
    }


    // 1. Validated Add Menu Item Endpoint
    @PostMapping("/menu")
    public ResponseEntity<?> addMenuItem(@Valid @RequestBody MenuItem item, BindingResult result) {
        if (result.hasErrors()) {
            String errorMessage = result.getAllErrors().stream()
                    .map(error -> error.getDefaultMessage())
                    .collect(Collectors.joining(", "));
            return ResponseEntity.badRequest().body(Map.of("message", errorMessage));
        }
        return new ResponseEntity<>(service.saveMenuItem(item), HttpStatus.CREATED);
    }

    // 2. Validated Update Menu Item Endpoint
    @PutMapping("/menu/{id}")
    public ResponseEntity<?> updateMenuItem(@PathVariable Long id, @Valid @RequestBody MenuItem updatedItem, BindingResult result) {
        if (result.hasErrors()) {
            String errorMessage = result.getAllErrors().stream()
                    .map(error -> error.getDefaultMessage())
                    .collect(Collectors.joining(", "));
            return ResponseEntity.badRequest().body(Map.of("message", errorMessage));
        }
        return ResponseEntity.ok(service.updateMenuItem(id, updatedItem));
    }

    @PostMapping("/orders")
    public ResponseEntity<?> placeOrder(@Valid @RequestBody OrderDetails order, BindingResult result) {
        if (result.hasErrors()) {
            // Collect all error messages and return them
            String errorMessage = result.getAllErrors().stream()
                    .map(error -> error.getDefaultMessage())
                    .collect(Collectors.joining(", "));
            return ResponseEntity.badRequest().body(Map.of("message", errorMessage));
        }

        try {
            return new ResponseEntity<>(service.saveOrder(order), HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to place order: " + e.getMessage()));
        }
    }




    @GetMapping("/orders")
    public ResponseEntity<?> getAllOrders() {
        try {
            return ResponseEntity.ok(service.getAllOrders());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch orders: " + e.getMessage()));
        }
    }

    @DeleteMapping("/orders/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        try {
            service.deleteOrder(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to delete order: " + e.getMessage()));
        }
    }

}