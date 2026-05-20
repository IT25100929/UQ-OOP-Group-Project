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

    public void deleteMenuItem(Long id) {
        if(menuRepo.existsById(id)) {
            menuRepo.deleteById(id);
        }
    }


    public MenuItem saveMenuItem(MenuItem item) {
        return menuRepo.save(item);
    }

    public MenuItem updateMenuItem(Long id, MenuItem updatedItem) {
        MenuItem existingItem = menuRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Menu item not found with id: " + id));

        // Update fields (specifically price, but keeps the rest intact)
        existingItem.setName(updatedItem.getName());
        existingItem.setPrice(updatedItem.getPrice());
        existingItem.setDescription(updatedItem.getDescription());
        existingItem.setCategory(updatedItem.getCategory());
        existingItem.setImage(updatedItem.getImage());

        return menuRepo.save(existingItem);
    }


    public OrderDetails saveOrder(OrderDetails order) {
        order.setOrderDate(LocalDateTime.now());
        return orderRepo.save(order);
    }

    public List<OrderDetails> getAllOrders() {
        return orderRepo.findAll();
    }

    public void deleteOrder(Long id) {
        orderRepo.deleteById(id);
    }

}