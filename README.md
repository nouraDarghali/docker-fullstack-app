# 🚀 docker-fullstack-app

Application fullstack avec **React.js (frontend)**, **Express.js (backend)**, **MySQL**, dockerisée avec **Docker Compose**, et intégrée avec **GitHub Actions** pour la CI/CD.

## 🛠️ Fonctionnalités

- la liste des utilisateur  
- ajouter un utilisateur  
- supprimer un utilisateu  
- modifier un utilisateu  
- Tests unitaires et d'intégration avec Supertest (je trouve des probléme avec Mocha et Chai + je fais les tests en local )  
- Base de données MySQL  
- Dockerisation complète  
- CI avec GitHub Actions  

## ⚙️ Technologies utilisées

- **Frontend** : React.js, Axios  
- **Backend** : Node.js, Express.js  
- **Base de données** : MySQL  
- **Tests** : Supertest  
- **Conteneurs** : Docker, Docker Compose  
- **CI/CD** : GitHub Actions  

## 🚀 Installation & lancement

### ✅ Prérequis

- Docker & Docker Compose installés  
- Node.js (pour un test local)  

### 🐳 Lancement avec Docker

cd docker-fullstack-app
docker-compose up --build

- Frontend : http://localhost:3000
- Backend API : http://localhost:5000

### 🐳 Tests
cd backend
npm test

### 🐳 🤖 CI/CD avec GitHub Actions

Un workflow  est défini dans .github/workflows/ci.yml avec les étapes suivants :

Checkout du repo

Setup de Node.js

Installation des dépendances

Build Docker image

Push de l'image vers Docker Hub

### 🐳 🤖 📁 Fichier .env
- MYSQL_HOST=root
- MYSQL_USER=user
- MYSQL_PASSWORD=password
- MYSQL_DATABASE=mydatabase

⚙️ En local (avant le build Docker et pour effectuer des tests locaux)

- MYSQL_HOST=localhost
- MYSQL_USER=root
- MYSQL_PASSWORD=root
- MYSQL_DATABASE=mydatabase
