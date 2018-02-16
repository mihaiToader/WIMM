package com.wimm.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NearController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome!!!";
    }
}
