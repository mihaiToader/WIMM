package com.wimm.app;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    @Value("${rest.api.base.path}")
    private String restApiBasePath;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
