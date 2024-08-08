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
        stage('Build') {
            steps {
                script {
                    bat '"%NODE_HOME%\\npm" install'
                    bat '"%NODE_HOME%\\npm" run build'
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
        always {
            cleanWs()  // Clean workspace after build
        }
    }
}
