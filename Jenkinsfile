pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build("my-webapp")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    docker.image("my-webapp").inside {
                        bat 'npm install'
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.image("my-webapp").inside {
                        bat 'npm start'
                    }
                }
            }
        }
    }
}
