package hacka.repository;

import hacka.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

//    User insert(User user);
//
//    List<User> findAll();
//
//    Optional<User> findById(String s);
}
