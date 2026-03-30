package com.hotel.model;

public class Payment {
    private String paymentId;
    private String referenceId; // BookingId or OrderId
    private double amount;
    private String method; // Cash, Card

    public Payment(String paymentId, String referenceId, double amount, String method) {
        this.paymentId = paymentId;
        this.referenceId = referenceId;
        this.amount = amount;
        this.method = method;
    }

    @Override
    public String toString() {
        return paymentId + "," + referenceId + "," + amount + "," + method;
    }
}