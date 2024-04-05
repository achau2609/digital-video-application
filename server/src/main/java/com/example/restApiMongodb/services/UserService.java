package com.example.restApiMongodb.services;

import com.example.restApiMongodb.models.UserModel;
import com.example.restApiMongodb.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // add user
    public UserModel addUser(UserModel userModel) throws Exception {
        UserModel repeatedUsers = repository.findByUsername(userModel.getUsername());
        if (repeatedUsers != null) {
            throw new Exception("Username already taken.");
        }

        // insert password encoding
        String encodedPw = passwordEncoder.encode(userModel.getPassword());
        userModel.setPassword(encodedPw);
        UserModel insertedUser = repository.insert(userModel);
        return insertedUser;
    }

    // get all users
    public List<UserModel> getUsers() {
        return repository.findAll();
    }

    // get user by id
    public Optional<UserModel> getUserById(String id) {
        return repository.findById(id);
    }

    public UserModel getUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel foundUserModel = repository.findByUsername(username);
        String user = foundUserModel.getUsername();
        String password = foundUserModel.getPassword();
        return new User(user, password, new ArrayList<>());
    }
}
