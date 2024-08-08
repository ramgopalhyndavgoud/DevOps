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

        pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:latest').inside("-v C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp:/usr/src/app") {
                        sh 'npm install'
                    }
                }
            }
        }
    }
}
                }
                }
