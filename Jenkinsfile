pipeline {
    agent any

    environment {
        NODE_IMAGE = 'node:latest'
        APP_DIR = 'C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    
                    bat """
                    docker run -d -t ^
                        -v ${APP_DIR}:/usr/src/app ^
                        -w /usr/src/app ^
                        ${NODE_IMAGE} ^
                        cmd.exe /c npm install
                    """
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    
                    bat """
                    docker run -d -t ^
                        -v ${APP_DIR}:/usr/src/app ^
                        -w /usr/src/app ^
                        ${NODE_IMAGE} ^
                        cmd.exe /c npm test
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    
                    echo 'Deploying application...'
                }
            }
        }
    }

    post {
        always {
            
            script {
                bat 'docker system prune -af'
            }
        }
    }
}
