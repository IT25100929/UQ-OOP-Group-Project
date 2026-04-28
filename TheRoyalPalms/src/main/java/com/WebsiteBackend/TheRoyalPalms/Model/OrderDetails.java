package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private String deliveryAddress;
    private String specialInstructions;
    private Double totalAmount;
    private LocalDateTime orderDate;
}