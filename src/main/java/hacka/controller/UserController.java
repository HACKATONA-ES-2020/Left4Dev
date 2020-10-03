package hacka.controller;

import hacka.domain.User;
import hacka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User postBuddy(
            @RequestBody User user
    ) {
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping
    public User editBuddy(
            @RequestBody User user
    ) {
        return userService.editUser(user);
    }

    @DeleteMapping
    public boolean deleteBuddy(
            @RequestParam String id
    ) {
        return userService.deleteUser(id);
    }
}