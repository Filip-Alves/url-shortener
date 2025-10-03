# URL Shortener

Monorepo pour un service de raccourcissement d’URLs avec **Java 21 / Spring Boot / PostgreSQL** côté backend et **React 18 + Vite / Tailwind CSS** côté frontend.

## Structure du projet

* `/backend` → API RESTful (Java / Spring Boot)
* `/frontend` → Application React moderne

## Lancer le projet

**Backend**

```bash
cd backend
./mvnw spring-boot:run
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

> Le frontend est accessible sur `http://localhost:3000` et communique avec l’API backend sur `http://localhost:8080`.

## Tech stack

* **Backend** : Java 21, Spring Boot, PostgreSQL
* **Frontend** : React 18, Vite, Tailwind CSS, Lucide React
* **Bonnes pratiques** : validation via DTO, codes HTTP standards, UI responsive
