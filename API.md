# 📚 Documentation de l'API
## 📚 Connexion à la base de données MySQL
Fichier : db.js
Ce fichier gère la connexion à la base de données MySQL.

Il utilise les variables d'environnement définies dans le fichier .env pour se connecter à la base de données.

Ce fichier initialise la connexion et vérifie si la connexion est réussie ou non.

## 📚 Définition des Routes
Fichier : server.js
Ce fichier est responsable de la définition des routes de l'API.

Il inclut les routes pour récupérer, ajouter, mettre à jour et supprimer des utilisateurs.

Ce fichier gère des erreurs.

Routes définies dans server.js :
GET / : Récupère la liste des utilisateurs.

POST /api/users : Ajoute un nouvel utilisateur à la base de données.

PUT /api/users/:id : Met à jour un utilisateur existant en fonction de son ID.

DELETE /api/users/:id : Supprime un utilisateur de la base de données.

GET /api/test : Teste que l'API fonctionne correctement.

## Les Tests
- Test unitaire pour une fonction mathématique
Fichier : test/unit.test.js
Rôle :
Ce fichier contient un test unitaire pour les fonctions mathématiques définies dans math.js.

- Test d'Intégration pour les Routes
Fichier : test/userRoutes.test.js
Rôle :
Ce fichier contient des tests d'intégration pour tester les routes de l'API telles que GET et POST.
Il utilise Supertest pour envoyer des requêtes HTTP à l'API et vérifier les réponses.

## Le Fichier Dockerfile
Le fichier Dockerfile est utilisé pour dockeriser le projet dans Docker. Voici le contenu de ce fichier :
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 5000

CMD ["node", "server.js"]

## Le Fichier .env
Le fichier .env est utilisé pour déclarer les variables d'environnement pour la connexion avec la base de données. 

Fichier : .env

MYSQL_HOST=root
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DATABASE=mydatabase

⚙️ En local (avant le build Docker et pour effectuer des tests locaux)

MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DATABASE=mydatabase


