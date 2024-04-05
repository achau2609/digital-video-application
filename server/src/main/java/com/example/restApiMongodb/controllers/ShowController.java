package com.example.restApiMongodb.controllers;

import com.example.restApiMongodb.CustomizedResponse;
import com.example.restApiMongodb.models.Show;
import com.example.restApiMongodb.services.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin
public class ShowController {

    @Autowired
    private ShowService service;

    // get all shows
    @GetMapping("/showslist")
    public ResponseEntity getShows() {
        var customizedResponse = new CustomizedResponse("A list of shows", service.getShows());
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // get show by id
    @GetMapping("/showslist/{id}")
    public ResponseEntity getShowById(@PathVariable("id") String id) {
        CustomizedResponse customizedResponse;
        try {
            customizedResponse = new CustomizedResponse("Show with id: " + id, Collections.singletonList(service.getShowById(id)));
        } catch (Exception e){
            customizedResponse = new CustomizedResponse(e.getMessage(), null);
            return new ResponseEntity(customizedResponse, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // query show by title
    @GetMapping("/showslist/search")
    public ResponseEntity searchShowsByString(@RequestParam(value="q") String qString) {
        var customizedResponse = new CustomizedResponse("Shows that contain " + qString, service.searchShowsByString(qString));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // query featured movies
    @GetMapping("/showslist/featuredmovies")
    public ResponseEntity getFeaturedMovies() {
        var customizedResponse = new CustomizedResponse("Featured movies: ", service.getFeaturedMovies());
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // query featured tv
    @GetMapping("/showslist/featuredtv")
    public ResponseEntity getFeaturedTv() {
        var customizedResponse = new CustomizedResponse("Featured TV shows: ", service.getFeaturedTv());
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // add show to db
    @PostMapping(value = "/showslist", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity addShow(@RequestBody Show show) {
        service.insertIntoShows(show);
        return new ResponseEntity(show, HttpStatus.OK);
    }

    // edit show
    @PutMapping(value = "/showslist/{id}", consumes = {
            MediaType.APPLICATION_JSON_VALUE
    })
    public ResponseEntity editShow(@PathVariable("id") String id, @RequestBody Show updatedShow) {
        var customizedResponse = new CustomizedResponse("Movie with id " + id + " was updated.", Collections.singletonList(service.editShow(id, updatedShow)));
        return new ResponseEntity(customizedResponse, HttpStatus.OK);
    }

    // remove show
    @DeleteMapping("/showslist/{id}")
    public ResponseEntity deleteShow(@PathVariable("id") String id) {
        service.deleteShow(id);
        return new ResponseEntity(HttpStatus.OK);
    }


}
