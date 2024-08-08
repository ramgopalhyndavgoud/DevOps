pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat '"C:\\Program Files\\nodejs\\npm" install'
            }
        }
        stage('Build') {
            steps {
                bat '"C:\\Program Files\\nodejs\\npx" webpack --config webpack.config.js'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage will be implemented'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
