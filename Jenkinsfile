pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    docker.build("my-webapp")
                }
            }
        }

       

        stage('Deploy') {
            steps {
                script {
                    // Deploy the application (if applicable)
                    docker.image("my-webapp").inside {
                        sh 'npm start'
                    }
                }
            }
        }
    }
}
