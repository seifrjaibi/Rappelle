pipeline {
    agent any

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
                sh 'mvn clean install'
            }
        }}

        stage('Frontend Build') {
            steps {
                dir('RappelleAngularFrontEnd'){
                // Installe les dépendances et build Angular
                sh 'npm install'
                sh 'ng build'
            }}
        }

        stage('Tests') {
            steps {
                    dir('backend-rappelle'){
                // Exécute les tests unitaires backend
                sh 'mvn test'
            }}
        }

        stage('Docker Build') {
            steps {
                // Construit tes images Docker
                sh 'docker-compose build'
            }
        }
    }
}
