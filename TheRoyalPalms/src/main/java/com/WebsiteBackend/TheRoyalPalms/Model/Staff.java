package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "staff")
@Data
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 3)
    private String name;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Contact is required")
    @Pattern(regexp = "^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$",
            message = "Invalid contact format")
    private String contact;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
}