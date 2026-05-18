package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.MaintenanceIssue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MaintenanceRepository extends JpaRepository<MaintenanceIssue, Long> {
}