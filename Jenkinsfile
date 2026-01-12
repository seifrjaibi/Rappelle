pipeline {
    agent any
    tools { 
        maven 'Maven 3.9.11'
        sonarQubeScanner 'SonarQube'
    }
    stages {
        stage('Checkout') {
            steps {
                // Récupère le code source depuis GitHub
                git branch: 'main', url: 'git@github.com:seifrjaibi/Rappelle.git'
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend-rappelle'){
                // Compile ton backend Spring Boot
                bat 'mvn clean install'
            }
        }}

        stage('Frontend Build') {
            steps {
                dir('RappelleAngularFrontEnd'){
                // Installe les dépendances et build Angular
                bat 'npm install'
                bat 'ng build'
            }}
        }

        stage('Tests') {
            steps {
                    dir('backend-rappelle'){
                // Exécute les tests unitaires backend
                bat 'mvn test'
            }}
        }
        stage('Analyse SonarQube') {
            steps {
                dir('backend-rappelle') {
                    // Analyse de qualité du code avec SonarQube
                    withSonarQubeEnv('SonarQube') {
                        bat 'mvn sonar:sonar'
                    }
                }
            }
        }

        stage('Docker Build') {
            steps {
                // Construit tes images Docker
                bat 'docker-compose build'
            }
        }
    }
}
