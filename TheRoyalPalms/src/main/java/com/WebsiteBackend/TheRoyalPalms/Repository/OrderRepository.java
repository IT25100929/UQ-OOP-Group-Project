package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderDetails, Long> {
}
