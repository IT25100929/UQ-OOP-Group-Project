package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
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

    @NotBlank(message = "Customer name is required")
    private String customerName;

    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is required")
    private String customerEmail;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$",
            message = "Invalid phone number format")
    private String customerPhone;

    @NotBlank(message = "Delivery address is required")
    @Size(min = 10, message = "Address must be at least 10 characters")
    private String deliveryAddress;

    private String specialInstructions;

    @NotNull
    @Positive
    private Double totalAmount;

    private LocalDateTime orderDate;
}