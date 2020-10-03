package hacka.repository;

import hacka.domain.Buddy;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuddyRepository extends MongoRepository<Buddy, String> {

//    Buddy insert(Buddy buddy);
//
//    Optional<Buddy> findById(Buddy buddy);
//
//    List<Buddy> findAll();
}
