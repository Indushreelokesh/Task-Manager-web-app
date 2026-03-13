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
                sh 'docker build -t indushreelokesh/taskflow:v1 .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push indusonushivu/taskflow:v1'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop taskflow-container || true'
                sh 'docker rm taskflow-container || true'
                sh 'docker run -d -p 3000:3000 --name taskflow-container indushreelokesh/taskflow:v1'
            }
        }
    }
}
