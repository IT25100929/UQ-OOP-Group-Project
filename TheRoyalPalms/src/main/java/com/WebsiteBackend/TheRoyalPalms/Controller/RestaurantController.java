package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.MenuItem;
import com.WebsiteBackend.TheRoyalPalms.Model.OrderDetails;
import com.WebsiteBackend.TheRoyalPalms.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RestaurantController {

    @Autowired
    private RestaurantService service;

    // GET: http://localhost:8080/api/menu
    @GetMapping("/menu")
    public List<MenuItem> getMenu() {
        return service.getAllMenuItems();
    }

    // POST: http://localhost:8080/api/orders
    @PostMapping("/orders")
    public ResponseEntity<OrderDetails> placeOrder(@RequestBody OrderDetails order) {
        return new ResponseEntity<>(service.saveOrder(order), HttpStatus.CREATED);
    }

    // Inside RestaurantController.java

    // POST: http://localhost:8080/api/menu
    @PostMapping("/menu")
    public ResponseEntity<MenuItem> addMenuItem(@RequestBody MenuItem item) {
        return new ResponseEntity<>(service.saveMenuItem(item), HttpStatus.CREATED);
    }
}