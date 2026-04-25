package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.MaintenanceIssue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for MaintenanceIssue entity.
 * This handles all database interactions for the IT reporting system.
 */
@Repository
public interface MaintenanceRepository extends JpaRepository<MaintenanceIssue, Long> {

    // By extending JpaRepository, you automatically get:
    // .save(issue)     -> Inserts the report into the 'maintenance_issues' table
    // .findAll()       -> Retrieves all reports for the Admin table
    // .findById(id)    -> Finds a specific report
    // .deleteById(id)  -> Removes a report
}