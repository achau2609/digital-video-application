package com.example.restApiMongodb.controllers;

import com.example.restApiMongodb.CustomizedResponse;
import com.example.restApiMongodb.models.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(value="/auth", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity login(@RequestBody UserModel userModel) {
        CustomizedResponse customizedResponse;
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userModel.getUsername(), userModel.getPassword()));
            customizedResponse = new CustomizedResponse("User " + userModel.getUsername() + " has logged in successfully.", null);
        } catch (AuthenticationException e){
            System.out.println(e.getMessage());
            customizedResponse = new CustomizedResponse("Incorrect username or password.", null);
            return new ResponseEntity(customizedResponse, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }
}
