package com.hotel.model;

public class MenuItem {
    private String itemId;
    private String name;
    private String category; // Food, Beverage
    private double price;

    public MenuItem(String itemId, String name, String category, double price) {
        this.itemId = itemId;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    @Override
    public String toString() {
        return itemId + "," + name + "," + category + "," + price;
    }
}