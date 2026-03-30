package com.hotel.model;

import java.io.*;
import java.util.*;

public class FileService {
    public static void saveToFile(String fileName, String data) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true))) {
            writer.write(data);
            writer.newLine();
        }
    }

    public static List<String> readFromFile(String fileName) throws IOException {
        List<String> records = new ArrayList<>();
        File file = new File(fileName);
        if (!file.exists()) return records;

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                records.add(line);
            }
        }
        return records;
    }
}