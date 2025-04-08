# Étape 1: Build
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Étape 2: Production
FROM node:18-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le build
COPY --from=builder /app .

# Ouvrir le port de l'API
EXPOSE 5000

# Lancer le serveur
CMD ["node", "server.js"]
