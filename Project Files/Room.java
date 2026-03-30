package com.hotel.model;

public class Room {
    private String roomNumber;
    private String type; // Single, Double, Suite
    private double price;
    private boolean isAvailable;

    public Room(String roomNumber, String type, double price, boolean isAvailable) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.price = price;
        this.isAvailable = isAvailable;
    }

    // Encapsulation
    public String getRoomNumber() { return roomNumber; }
    public boolean isAvailable() { return isAvailable; }
    public void setAvailable(boolean available) { isAvailable = available; }

    @Override
    public String toString() {
        return roomNumber + "," + type + "," + price + "," + isAvailable;
    }
}
