package com.WebsiteBackend.TheRoyalPalms.Repository;


import com.WebsiteBackend.TheRoyalPalms.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}