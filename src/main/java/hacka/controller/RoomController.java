package hacka.controller;

import hacka.domain.Room;
import hacka.service.BuddyService;
import hacka.service.RoomService;
import hacka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomService roomService;
    @Autowired
    private UserService userService;
    @Autowired
    private BuddyService buddyService;

    @PostMapping
    public Room createRoom(
            @RequestParam String idUser,
            @RequestParam String idBuddy
    ) {
        return roomService.createRoom(userService.getById(idUser), buddyService.getById(idBuddy));
    }

    @PostMapping("/message")
    public String sendMessage(
            @RequestParam String message,
            @RequestBody Room room
    ) {
        return roomService.sendMessage(room, message);
    }

    @GetMapping
    public List<String> listMessages(
            @RequestBody Room room
    ) {
        return roomService.getMessages(room);
    }
}
