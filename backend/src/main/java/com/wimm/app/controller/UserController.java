package com.wimm.app.controller;

import com.wimm.app.domain.UserEntity;
import com.wimm.app.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final BCryptPasswordEncoder encoder;
    private final UserService userService;
    private final Logger LOGGER = Logger.getLogger(UserController.class.getName());

    @Autowired
    public UserController(final BCryptPasswordEncoder encoder, final UserService userService) {
        this.encoder = encoder;
        this.userService = userService;
    }

    @ResponseBody
    @GetMapping("/current")
    public UserEntity currentUserName(Authentication auth) {
        return (UserEntity) auth.getPrincipal();
    }

    @PostMapping("/register")
    public void registerConsumer(@RequestBody @Validated(UserEntity.ValidationRegister.class) UserEntity user) {
        LOGGER.info("User " + user.getUsername() + " registers now ...");
        userService.saveUser(user);
    }
}
