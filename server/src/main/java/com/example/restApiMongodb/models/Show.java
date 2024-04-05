package com.example.restApiMongodb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("shows")
public class Show {

    @Id
    private String id;
    private String title;
    private String poster;
    private String category;
    private String rentalPrice;
    private String purchasePrice;
    private String desc;
    private String featured;

    public Show() {
    }

    public Show(String id, String title, String poster, String category, String rentalPrice, String purchasePrice, String desc, String featured) {
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.category = category;
        this.rentalPrice = rentalPrice;
        this.purchasePrice = purchasePrice;
        this.desc = desc;
        this.featured = featured;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getRentalPrice() {
        return rentalPrice;
    }

    public void setRentalPrice(String rentalPrice) {
        this.rentalPrice = rentalPrice;
    }

    public String getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(String purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getFeatured() {
        return featured;
    }

    public void setFeatured(String featured) {
        this.featured = featured;
    }

    @Override
    public String toString() {
        return "Show{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", poster='" + poster + '\'' +
                ", category='" + category + '\'' +
                ", rentalPrice='" + rentalPrice + '\'' +
                ", purchasePrice='" + purchasePrice + '\'' +
                ", desc='" + desc + '\'' +
                ", featured='" + featured + '\'' +
                '}';
    }
}
