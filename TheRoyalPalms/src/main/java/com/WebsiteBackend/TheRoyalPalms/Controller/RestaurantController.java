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


    @PostMapping("/menu")
    public ResponseEntity<MenuItem> addMenuItem(@RequestBody MenuItem item) {
        return new ResponseEntity<>(service.saveMenuItem(item), HttpStatus.CREATED);
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

        return new ResponseEntity<>(service.saveOrder(order), HttpStatus.CREATED);
    }




    @GetMapping("/orders")
    public List<OrderDetails> getAllOrders() {
        return service.getAllOrders();
    }

    @DeleteMapping("/orders/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        service.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

}