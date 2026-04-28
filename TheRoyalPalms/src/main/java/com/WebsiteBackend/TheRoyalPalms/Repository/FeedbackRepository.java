package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}