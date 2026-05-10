package com.WebsiteBackend.TheRoyalPalms.Controller;

import com.WebsiteBackend.TheRoyalPalms.Model.Feedback;
import com.WebsiteBackend.TheRoyalPalms.Repository.FeedbackRepository;
import com.WebsiteBackend.TheRoyalPalms.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:5173")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> saveFeedback(@RequestBody Feedback feedback) {
        // Check if user exists in the users table
        if (!userRepository.existsByEmail(feedback.getUserEmail())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Only registered guests can provide feedback. Please sign up first!"));
        }

        // Check the limit (limit to 3 feedbacks per email)
        long feedbackCount = feedbackRepository.countByUserEmail(feedback.getUserEmail());
        if (feedbackCount >= 3) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .body(Map.of("message", "You have already shared your thoughts 3 times. Thank you for your active participation!"));
        }

        // Save if both checks pass
        return ResponseEntity.ok(feedbackRepository.save(feedback));
    }

    @GetMapping
    public List<Feedback> getAllFeedback() {
        // Returns newest feedback first
        return feedbackRepository.findAll(Sort.by(Sort.Direction.DESC, "submittedAt"));
    }
}