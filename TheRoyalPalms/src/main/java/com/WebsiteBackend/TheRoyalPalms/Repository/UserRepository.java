package com.WebsiteBackend.TheRoyalPalms.Repository;


import com.WebsiteBackend.TheRoyalPalms.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // This allows us to find the user by email during sign-in
    Optional<User> findByEmail(String email);
}