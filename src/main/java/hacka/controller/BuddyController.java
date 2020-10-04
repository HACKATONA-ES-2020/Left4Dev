package hacka.controller;

import hacka.domain.Buddy;
import hacka.service.BuddyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buddy")
public class BuddyController {

    @Autowired
    private BuddyService buddyService;

    @PostMapping
    public Buddy postBuddy(
            @RequestBody Buddy buddy
    ) throws Exception {
        return buddyService.createBuddy(buddy);
    }

    @GetMapping
    public List<Buddy> listBuddies() {
        return buddyService.getValidatesBuddies();
    }

    @GetMapping("/not-valids")
    public List<Buddy> listWaitingBuddies() {
        return buddyService.getNotValidateBuddies();
    }

    @GetMapping
    public Buddy getBuddy(
            @RequestParam String id
    ) {
        return buddyService.getById(id);
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
