package hacka.service;

import hacka.domain.Buddy;
import hacka.domain.Room;
import hacka.domain.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    public Room createRoom(User user, Buddy buddy) {
        user.setAvaliable(false);
        return new Room(buddy, user);
    }

    public String sendMessage(Room room, String message) {
        room.getMessages().add(message);
        return message;
    }

    public List<String> getMessages(Room room) {
        return room.getMessages();
    }
}
