shpipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/indushreeelokesh/taskflow-devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t YOUR_DOCKERHUB/taskflow:v1 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push YOUR_DOCKERHUB/taskflow:v1'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop taskflow-container || true'
                sh 'docker rm taskflow-container || true'
                sh 'docker run -d -p 3000:3000 --name taskflow-container YOUR_DOCKERHUB/taskflow:v1'
            }
        }

    }
}

