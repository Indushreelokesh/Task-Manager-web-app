pipeline {

agent any

stages {

stage('Clone') {

steps {

git 'https://github.com/indushreelokesh/taskflow-devops-project.git'

}

}

stage('Build Docker Image') {

steps {

sh 'docker build -t YOUR_DOCKERHUB/taskflow:v1 .'

}

}

stage('Push Image') {

steps {

sh 'docker push YOUR_DOCKERHUB/taskflow:v1'

}

}

stage('Deploy to Kubernetes') {

steps {

sh 'kubectl apply -f deployment.yaml'

sh 'kubectl apply -f service.yaml'

}

}

}

}
