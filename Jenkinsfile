pipeline {
    agent any
    
    environment {
        // Define environment variables if needed
        PROJECT_DIR = 'C:/Users/sreenivasrao/Desktop/1/my-webapp'
        JENKINS_WORKSPACE = 'C:/ProgramData/Jenkins/.jenkins/workspace/web-app'
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
                    // Convert Windows paths to Unix paths for Docker
                    def unixProjectDir = PROJECT_DIR.replace('\\', '/').replaceFirst(/^C:/, '/c')
                    def unixWorkspaceDir = JENKINS_WORKSPACE.replace('\\', '/').replaceFirst(/^C:/, '/c')
                    
                    // Use Docker to run the build
                    docker.image('node:latest').inside("-v ${unixProjectDir}:/usr/src/app -w /usr/src/app") {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Use Docker to run tests
                    docker.image('node:latest').inside("-v ${unixProjectDir}:/usr/src/app -w /usr/src/app") {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deployment steps can vary based on your needs
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
