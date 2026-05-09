package com.WebsiteBackend.TheRoyalPalms.Repository;

import com.WebsiteBackend.TheRoyalPalms.Model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query("SELECT COUNT(b) > 0 FROM Booking b WHERE b.roomId = :roomId " +
            "AND (:newCheckIn < b.checkOut AND :newCheckOut > b.checkIn)")
    boolean existsByRoomIdAndOverlap(
            @Param("roomId") Long roomId,
            @Param("newCheckIn") LocalDate newCheckIn,
            @Param("newCheckOut") LocalDate newCheckOut
    );
}