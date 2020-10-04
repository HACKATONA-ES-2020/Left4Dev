package hacka.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "user")
public class User {

    @Id
    private String id;
    private String name;
    private String password;
    private String letter;
    private String whatsApp;
    private int scale;
    private boolean avaliable = true;

}
