package hacka.controller;

import hacka.domain.Buddy;
import hacka.service.BuddyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/buddy")
public class BuddyController {

    @Autowired
    private BuddyService buddyService;

    @PostMapping
    public Buddy postBuddy(
            @RequestBody Buddy buddy
    ) {
        return buddyService.createBuddy(buddy);
    }

    @PutMapping
    public Buddy editBuddy(
            @RequestBody Buddy buddy
    ) {
        return buddyService.editBuddy(buddy);
    }

    @DeleteMapping
    public boolean deleteBuddy(
            @RequestParam String id
    ) {
        return buddyService.deleteBuddy(id);
    }
}
