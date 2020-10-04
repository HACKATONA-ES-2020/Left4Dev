package hacka.domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "buddy")
@NoArgsConstructor
public class Buddy {

    @Id
    private String id;
    private String name;
    private String area;
    //private FileSystemResource cv;
    private String password;
    private boolean flag;
    private boolean isValid = false;

}
