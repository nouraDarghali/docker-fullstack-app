# Étape 1: Build avec Node
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Serve avec nginx
FROM nginx:alpine

# Copier les fichiers build React vers nginx
COPY --from=builder /app/build /usr/share/nginx/html

# (Facultatif) remplacer la conf nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
