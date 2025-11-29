# Étape 1 : Build Angular avec Node.js
FROM node:22.12.0 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Étape 2 : Servir avec Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/RappelleAngularFrontEnd/browser /usr/share/nginx/html

# Exposer le port
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]

