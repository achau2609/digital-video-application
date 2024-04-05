package com.example.restApiMongodb.services;

import com.example.restApiMongodb.models.Show;
import com.example.restApiMongodb.models.ShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class ShowService {

    @Autowired
    private ShowRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    // get all shows
    public List<Show> getShows() {
        return repository.findAll();
    }

    // get show by id
    public Optional<Show> getShowById(String id) throws Exception {
        Optional<Show> show = repository.findById(id);
        if(!show.isPresent()) {
            throw new Exception("Movie with " + id + " is not found.");
        }
        return show;
    }

    // query show by title
    public List<Show> searchShowsByString(String qString) {
        Query query = new Query();
        query.addCriteria(Criteria.where("title").regex(".*" + qString + ".*", "i"));
        return mongoTemplate.find(query, Show.class);
    }

    // query featured movies
    public List<Show> getFeaturedMovies() {
        Query query = new Query();
        query.addCriteria(Criteria.where("category").is("movie")).addCriteria(Criteria.where("featured").is("yes"));
        return mongoTemplate.find(query, Show.class);
    }

    // query featured tv
    public List<Show> getFeaturedTv() {
        Query query = new Query();
        query.addCriteria(Criteria.where("category").is("tv")).addCriteria(Criteria.where("featured").is("yes"));
        return mongoTemplate.find(query, Show.class);
    }

    // add show into db
    public void insertIntoShows(Show show) {
        repository.insert(show);
    }

    // edit show details
    public Show editShow(String id, Show updatedShow) {

        Optional<Show> show = repository.findById(id);

        show.get().setTitle(updatedShow.getTitle());
        show.get().setPoster(updatedShow.getPoster());
        show.get().setCategory(updatedShow.getCategory());
        show.get().setRentalPrice(updatedShow.getRentalPrice());
        show.get().setPurchasePrice(updatedShow.getPurchasePrice());
        show.get().setDesc(updatedShow.getDesc());
        show.get().setFeatured(updatedShow.getFeatured());

        Show newShow = repository.save(show.get());
        return newShow;
    }

    // delete a show
    public void deleteShow(String id) {
        repository.deleteById(id);
    }
}
