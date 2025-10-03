package com.example.urlshortener.service;

import com.example.urlshortener.entity.UrlMapping;
import com.example.urlshortener.repository.UrlMappingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UrlMappingService {

    private final UrlMappingRepository repository;

    public UrlMappingService(UrlMappingRepository repository) {
        this.repository = repository;
    }

    public List<UrlMapping> getAll() {
        return repository.findAll();
    }


    public UrlMapping create(String url) {
        String shortCode;
        do {
            shortCode = ShortCodeGenerator.generate();
        } while (repository.existsByShortCode(shortCode)); // vérifie s'il est unique

        UrlMapping mapping = new UrlMapping(url, shortCode);
        return repository.save(mapping);
    }

    public Optional<UrlMapping> getByShortCode(String shortCode) {
        return repository.findByShortCode(shortCode);
    }

    public Optional<UrlMapping> update(String shortCode, String newUrl) {
        return repository.findByShortCode(shortCode).map(mapping -> {
            mapping.setUrl(newUrl);
            return repository.save(mapping);
        });
    }

    public boolean delete(String shortCode) {
        return repository.findByShortCode(shortCode).map(mapping -> {
            repository.delete(mapping);
            return true;
        }).orElse(false);
    }

    public Optional<UrlMapping> incrementAccess(String shortCode) {
        return repository.findByShortCode(shortCode).map(mapping -> {
            mapping.setAccessCount(mapping.getAccessCount() + 1);
            return repository.save(mapping);
        });
    }
}
