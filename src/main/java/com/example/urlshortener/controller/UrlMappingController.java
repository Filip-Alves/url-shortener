package com.example.urlshortener.controller;

import com.example.urlshortener.dto.CreateUrlRequest;
import com.example.urlshortener.entity.UrlMapping;
import com.example.urlshortener.service.UrlMappingService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/shorten")
public class UrlMappingController {

    private final UrlMappingService service;

    public UrlMappingController(UrlMappingService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<UrlMapping>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }


    // 1. Créer une URL courte
    @PostMapping
    public ResponseEntity<UrlMapping> create(@RequestBody CreateUrlRequest request) {
        UrlMapping mapping = service.create(request.getUrl());
        return ResponseEntity.status(201).body(mapping);
    }


    // 2. Récupérer une URL par shortCode
    @GetMapping("/{code}")
    public ResponseEntity<UrlMapping> get(@PathVariable String code) {
        Optional<UrlMapping> mapping = service.getByShortCode(code);
        return mapping.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. Mettre à jour une URL
    @PutMapping("/{code}")
    public ResponseEntity<UrlMapping> update(@PathVariable String code,@RequestBody @Valid CreateUrlRequest request) {
        Optional<UrlMapping> updated = service.update(code, request.getUrl());
        return updated.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    // 4. Supprimer une URL
    @DeleteMapping("/{code}")
    public ResponseEntity<Void> delete(@PathVariable String code) {
        boolean deleted = service.delete(code);
        return deleted ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

    // 5. Obtenir stats d'une URL
    @GetMapping("/{code}/stats")
    public ResponseEntity<UrlMapping> stats(@PathVariable String code) {
        Optional<UrlMapping> mapping = service.getByShortCode(code);
        return mapping.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/r/{code}")
    public ResponseEntity<Object> redirect(@PathVariable String code) {
        return service.incrementAccess(code)
                .map(m -> ResponseEntity.status(302)
                        .location(URI.create(m.getUrl()))
                        .build())
                .orElse(ResponseEntity.notFound().build());
    }

}
