package com.WebsiteBackend.TheRoyalPalms.Service;

import com.WebsiteBackend.TheRoyalPalms.Model.MenuItem;
import com.WebsiteBackend.TheRoyalPalms.Model.OrderDetails;
import com.WebsiteBackend.TheRoyalPalms.Repository.MenuItemRepository;
import com.WebsiteBackend.TheRoyalPalms.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RestaurantService {
    @Autowired
    private MenuItemRepository menuRepo;

    @Autowired
    private OrderRepository orderRepo;

    public List<MenuItem> getAllMenuItems() {
        return menuRepo.findAll();
    }

    public OrderDetails saveOrder(OrderDetails order) {
        order.setOrderDate(LocalDateTime.now());
        return orderRepo.save(order);
    }

    // Inside RestaurantService.java

    public MenuItem saveMenuItem(MenuItem item) {
        return menuRepo.save(item);
    }
}