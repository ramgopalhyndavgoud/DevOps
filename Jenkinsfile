pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    docker.build("my-webapp")
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Run Docker container and start application
                    docker.image("my-webapp").inside('-w /app') {
                        sh 'npm start'
                    }
                }
            }
        }
    }
}
