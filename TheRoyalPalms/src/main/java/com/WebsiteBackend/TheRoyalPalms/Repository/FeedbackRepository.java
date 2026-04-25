package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Feedback entity.
 * Provides standard CRUD operations and custom query methods.
 */
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    // Spring Data JPA automatically provides:
    // - save() (used for your POST requests)
    // - findAll() (used for your Admin GET requests)
    // - findById()
    // - deleteById()
}