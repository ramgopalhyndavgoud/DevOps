pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'my-web-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ramgopalhyndavgoud/DevOps.git'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run tests here
                    echo 'Running tests...'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Add deployment steps here if needed
                    echo 'Deploying to Kubernetes...'
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
