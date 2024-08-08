pipeline {
    agent any

    environment {
        NODE_HOME = "C:\\Program Files\\nodejs"
        DEPLOY_SCRIPTS = "C:\\Users\\sreenivasrao\\Desktop\\1\\my-webapp\\scripts"
    }

    parameters {
        choice(name: 'ENVIRONMENT', choices: ['dev', 'staging', 'prod'], description: 'Choose deployment environment')
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

        stage('Lint') {
            steps {
                script {
                    bat 'npx eslint .'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }

        stage('Publish Reports') {
            steps {
                script {
                    publishHTML(target: [
                        reportDir: 'reports',
                        reportFiles: 'index.html',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: false
                    ])
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def scriptPath = ""
                    if (params.ENVIRONMENT == 'prod') {
                        scriptPath = "${DEPLOY_SCRIPTS}\\deploy-prod.bat"
                    } else if (params.ENVIRONMENT == 'staging') {
                        scriptPath = "${DEPLOY_SCRIPTS}\\deploy-staging.bat"
                    } else {
                        scriptPath = "${DEPLOY_SCRIPTS}\\deploy-dev.bat"
                    }
                    bat scriptPath
                }
            }
        }
    }

    post {
        success {
            slackSend(channel: '#build-notifications', message: "Build Successful: ${env.BUILD_URL}")
        }
        failure {
            slackSend(channel: '#build-notifications', message: "Build Failed: ${env.BUILD_URL}")
        }
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            cleanWs()
        }
    }
}
