package hacka.service;

import hacka.domain.User;
import hacka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BuddyService buddyService;

    public User createUser(User user) throws Exception {
        if (!userExists(user)) {
            return userRepository.save(user);
        } else {
            throw new Exception("User already exists");
        }
    }

    public User editUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getAvaliableUsers() {
        return userRepository.findAll()
                .stream()
                .filter(User::isAvaliable)
                .collect(Collectors.toList());
    }

    public boolean deleteUser(String id) {
        userRepository.deleteById(id);
        return true;
    }

    public User getById(String id) {
        return userRepository.findById(id).orElseThrow();
    }

    public User getByName(String name) {
        for (User user: getAllUsers()) {
            if (user.getName().equals(name)) {
                return user;
            }
        }
        return null;
    }

    public boolean validateLogin(String name, String password) {
        return getByName(name).getPassword().equals(password) || buddyService.getByName(name).getPassword().equals(password);
    }

    public boolean userExists(User user) {
        for(User u: getAllUsers()) {
            if (u.getName().equals(user.getName())) {
                return true;
            }
        }
        return false;
    }
}
