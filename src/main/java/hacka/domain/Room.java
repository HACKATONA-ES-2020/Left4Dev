package hacka.domain;

import lombok.Data;

import java.util.List;

@Data
public class Room {

    private String id;
    private Buddy buddy;
    private User user;
    private List<String> messages;

    public Room(Buddy buddy, User user) {
        this.buddy = buddy;
        this.user = user;
    }
}
