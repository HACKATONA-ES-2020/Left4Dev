package hacka.service;

import hacka.domain.Buddy;
import hacka.repository.BuddyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BuddyService {

    @Autowired
    private BuddyRepository buddyRepository;

    public Buddy createBuddy(Buddy buddy) throws Exception {
        if (!buddyExists(buddy)) {
            return buddyRepository.insert(buddy);
        } else {
            throw new Exception("Buddy already exists");
        }
    }

    public Buddy editBuddy(Buddy buddy) {
        return buddyRepository.save(buddy);
    }

    public boolean deleteBuddy(String id) {
        buddyRepository.deleteById(id);
        return true;
    }

    public List<Buddy> getValidatesBuddies() {
        return buddyRepository.findAll().stream().filter(Buddy::isValid).collect(Collectors.toList());
    }

    public List<Buddy> getNotValidateBuddies() {
        return buddyRepository.findAll().stream().filter(b -> !b.isValid()).collect(Collectors.toList());
    }

    public Buddy getByName(String name) {
        for (Buddy buddy: getNotValidateBuddies()) {
            if (buddy.getName().equals(name)) {
                return buddy;
            }
        }
        return null;
    }

    public Buddy getById(String id) {
        return buddyRepository.findById(id).orElseThrow();
    }

    public boolean buddyExists(Buddy buddy) {
        for(Buddy b: getNotValidateBuddies()) {
            if (b.getName().equals(buddy.getName())) {
                return true;
            }
        }
        return false;
    }
}
