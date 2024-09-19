package br.com.project.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.project.api.repository.RepositoryClient;

@RestController
public class Controller {

    @Autowired
    private RepositoryClient action;

    @GetMapping("/")
    public String testApi() {
        return "Hello from API!";
    }
}
