package hacka.controller;

import hacka.domain.User;
import hacka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User postBuddy(
            @RequestBody User user
    ) throws Exception {
        return userService.createUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/login")
    public boolean login(
            @RequestParam String name,
            @RequestParam String password
    ) {
        return userService.validateLogin(name, password);
    }

    @GetMapping("/avaliable")
    public List<User> getAvaliableUsers() {
        return userService.getAvaliableUsers();
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
