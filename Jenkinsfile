pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Indushreelokesh/Task-Manager-web-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t taskflow:v1 .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop $(docker ps -q) || true'
                sh 'docker rm $(docker ps -aq) || true'
                sh 'docker run -d -p 3000:3000 --name taskflow-container taskflow:v1'
            }
        }

    }
}
