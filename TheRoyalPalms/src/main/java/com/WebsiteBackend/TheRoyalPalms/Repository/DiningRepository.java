package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.Dining;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiningRepository extends JpaRepository<Dining, Long> {
}