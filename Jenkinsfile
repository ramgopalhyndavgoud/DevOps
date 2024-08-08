pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy to Development') {
            when {
                branch 'development'  // Adjust branch name if necessary
            }
            steps {
                script {
                    bat 'C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp\\scripts\\deploy-dev.bat'
                }
            }
        }

        stage('Deploy to Staging') {
            when {
                branch 'staging'
            }
            steps {
                script {
                    bat 'C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp\\scripts\\deploy-staging.bat'
                }
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'  // Adjust if your production branch has a different name
            }
            steps {
                script {
                    bat 'C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp\\scripts\\deploy-prod.bat'
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean workspace after build
        }
    }
}
