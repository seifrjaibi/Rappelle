# Étape 1 : Utiliser une image Java légère
FROM eclipse-temurin:21-jdk

# Étape 2 : Définir le dossier de travail dans le container
WORKDIR /app

# Étape 3 : Copier le fichier .jar compilé dans le container
COPY target/*.jar app.jar

# Étape 4 : Lancer l'application Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]


