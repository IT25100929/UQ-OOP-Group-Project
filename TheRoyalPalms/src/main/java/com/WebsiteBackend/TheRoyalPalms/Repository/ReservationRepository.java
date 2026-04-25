package com.WebsiteBackend.TheRoyalPalms.Repository;


import com.WebsiteBackend.TheRoyalPalms.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}