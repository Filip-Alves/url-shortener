# URL Shortener

Une application React moderne pour raccourcir des URLs avec une interface utilisateur élégante et des statistiques détaillées.

## 🚀 Fonctionnalités

- ✅ Création d'URLs raccourcies
- ✅ Modification et suppression d'URLs existantes
- ✅ Statistiques détaillées (clics, visiteurs uniques, dernier accès)
- ✅ Copie rapide des liens raccourcis
- ✅ Interface responsive et moderne
- ✅ Gestion d'erreurs complète

## 🛠️ Technologies

- **Frontend** : React 18 + Vite
- **Styling** : Tailwind CSS
- **Icônes** : Lucide React
- **Backend** : Spring Boot (API REST)

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd frontend

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🏗️ Architecture

Le projet suit les bonnes pratiques d'architecture front-end :

```
src/
├── components/           # Composants React
│   ├── ui/              # Composants UI réutilisables
│   ├── layout/          # Composants de mise en page
│   └── pages/           # Composants de page
├── hooks/               # Hooks personnalisés
├── services/            # Services API
├── utils/               # Utilitaires
├── constants/           # Constantes
└── pages/               # Pages principales
```

## 🎯 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
```

## 🔧 Configuration

L'application se connecte à une API Spring Boot sur `http://localhost:8080` par défaut.

## 📱 Interface

- **Design moderne** avec Tailwind CSS
- **Responsive** pour tous les écrans
- **Animations fluides** et transitions
- **Feedback visuel** pour toutes les actions

## 🚀 Déploiement

```bash
# Build de production
npm run build

# Les fichiers sont générés dans le dossier dist/
```
