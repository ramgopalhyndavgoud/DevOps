pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    def app = docker.build("my-webapp")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image("my-webapp").inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the application (if applicable)
                    docker.image("my-webapp").inside {
                        sh 'docker run -d -p 3000:3000 my-webapp'
                    }
                }
            }
        }
    }
}
