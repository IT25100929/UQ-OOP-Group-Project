package com.WebsiteBackend.TheRoyalPalms.Model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "maintenance_issues")
@Data
public class MaintenanceIssue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String issueTitle;
    private String priority; // e.g.Low, Medium, High, Urgent

    @Column(columnDefinition = "TEXT")
    private String description;

    private String status; // e.g.Pending, In Progress, Resolved
    private LocalDateTime reportedAt;

    @PrePersist
    protected void onCreate() {
        reportedAt = LocalDateTime.now();
        if (this.status == null) this.status = "Pending";
    }
}