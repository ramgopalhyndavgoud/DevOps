pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'echo Installing dependencies'
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'echo Building the project'
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo Deploying the project'
                bat 'npm run deploy'
            }
        }
    }
}
