package br.com.project.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.project.api.model.Client;
import br.com.project.api.repository.RepositoryClient;

@RestController
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    private RepositoryClient action;

    @PostMapping("/")
    public Client register(@RequestBody Client c) {
        return action.save(c);
    }

    @GetMapping("/")
    public Iterable<Client> select() {
        return action.findAll();
    }

    @PutMapping("/")
    public Client edit(@RequestBody Client c) {
        return action.save(c);
    }

    @DeleteMapping("/{code}")
    public void remove(@PathVariable long code) {
        action.deleteById(code);
    }
}
