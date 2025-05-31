pipeline {
    agent any

    stages {
        stage('Start') {
            steps {
                echo 'Début de l\'analyse des logs'
            }
        }

        stage('Analyze') {
            steps {
                sh '''
                    npm install || true
                    node index.js
                '''
            }
        }

        stage('End') {
            steps {
                echo 'Fin du pipeline'
            }
        }
    }
}
