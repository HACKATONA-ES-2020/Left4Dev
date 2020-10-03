package hacka.service;

import hacka.domain.Buddy;
import hacka.repository.BuddyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuddyService {

    @Autowired
    private BuddyRepository buddyRepository;

    public Buddy createBuddy(Buddy buddy) {
        return buddyRepository.save(buddy);
    }

    public Buddy editBuddy(Buddy buddy) {
        return buddyRepository.save(buddy);
    }

    public boolean deleteBuddy(String id) {
        buddyRepository.deleteById(id);
        return true;
    }

    public Buddy getById(String id) {
        return buddyRepository.findById(id).orElseThrow();
    }
}
