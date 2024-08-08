pipeline {
    agent any
    
    environment {
        // Define environment variables if needed
        PROJECT_DIR = 'C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Check out the source code from Git
                git 'https://github.com/ramgopalhyndavgoud/DevOps.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Use Docker to run the build
                    docker.image('node:latest').inside("-v ${env.PROJECT_DIR}:/usr/src/app -w /usr/src/app") {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Use Docker to run tests
                    docker.image('node:latest').inside("-v ${env.PROJECT_DIR}:/usr/src/app -w /usr/src/app") {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deployment steps can vary based on your needs
                    // For example, copying files to a deployment server or using a deploy script
                    echo 'Deploying application...'
                    // Example: sh './deploy.sh'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
