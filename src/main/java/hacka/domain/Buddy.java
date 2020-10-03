package hacka.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.FileInputStream;

@Data
@Document(collection = "buddy")
public class Buddy {

    @Id
    private String id;
    private String name;
    private String area;
    private FileInputStream cv;
    private String password;
    private boolean flag;
    private boolean isValid;

}
