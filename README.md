# URL Shortener API

API RESTful pour raccourcir des URLs longues avec **Java 21**, **Spring Boot 3.5** et **PostgreSQL**.

## Fonctionnalités
- Créer une URL courte (POST /shorten)
- Récupérer une URL par code (GET /shorten/{code})
- Récupérer toutes les URLs (GET /shorten)
- Mettre à jour une URL (PUT /shorten/{code})
- Supprimer une URL (DELETE /shorten/{code})
- Statistiques d’accès (GET /shorten/{code}/stats)
- Redirection (GET /shorten/r/{code}, 302 Found)

## Installation
1. Cloner le projet et créer la base PostgreSQL `url_shortener`.
2. Configurer `application.properties` avec la DB.
3. Lancer : `./mvnw spring-boot:run`.

## Bonnes pratiques
- Validation des entrées via DTO
- `shortCode` unique et aléatoire
- `createdAt` / `updatedAt` automatiques
- Codes HTTP standards respectés

## Test
Utiliser Postman pour toutes les routes. `/r/{code}` retourne 302 + Location.

