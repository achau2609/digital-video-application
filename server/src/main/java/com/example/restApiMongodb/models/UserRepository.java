package com.example.restApiMongodb.models;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {

    @Query("{ 'username' : ?0 }")
    UserModel findByUsername(String username);
}
