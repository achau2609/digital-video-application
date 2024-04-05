package com.example.restApiMongodb.controllers;

import com.example.restApiMongodb.CustomizedResponse;
import com.example.restApiMongodb.models.UserModel;
import com.example.restApiMongodb.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService service;

    // get all users
    @GetMapping("/users")
    public ResponseEntity getUsers() {
        var customizedResponse = new CustomizedResponse("A list of all users: ", service.getUsers());
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity getUserById(@PathVariable("id") String id) {
        var customizedResponse = new CustomizedResponse("User with id: " + id, Collections.singletonList(service.getUserById(id)));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // get user by username
    @GetMapping("/user")
    public ResponseEntity getUserByUsername(@RequestParam(value="username") String username) {
        CustomizedResponse customizedResponse;
        UserModel user = service.getUserByUsername(username);
        user.setPassword("");
        if(user != null) {
            customizedResponse = new CustomizedResponse("User has been found: ", Collections.singletonList(user));
        } else {
            customizedResponse = new CustomizedResponse("User not found.", null);
            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // add user
    @PostMapping(value = "/users", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity addUser(@RequestBody UserModel userModel) {
        CustomizedResponse customizedResponse;
        try {
            service.addUser(userModel);
            customizedResponse = new CustomizedResponse("User has been added.", null);

        } catch (Exception e) {
            customizedResponse = new CustomizedResponse(e.getMessage(), null);
            return new ResponseEntity(customizedResponse, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }
}
