pipeline {
    agent any

    environment {
        NODE_HOME = "C:\\Program Files\\nodejs"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/ramgopalhyndavgoud/DevOps.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat '"%NODE_HOME%\\npm" install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat '"%NODE_HOME%\\npx" webpack --config webpack.config.js'
                }
            }
        }

        stage('Deploy to Development') {
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
                branch 'main'
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
