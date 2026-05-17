package com.WebsiteBackend.TheRoyalPalms.Service;

import com.WebsiteBackend.TheRoyalPalms.Model.MenuItem;
import com.WebsiteBackend.TheRoyalPalms.Repository.MenuItemRepository;
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

    public void deleteMenuItem(Long id) {
        if(menuRepo.existsById(id)) {
            menuRepo.deleteById(id);
        }
    }


    // Inside RestaurantService.java

    public MenuItem saveMenuItem(MenuItem item) {
        return menuRepo.save(item);
    }
}