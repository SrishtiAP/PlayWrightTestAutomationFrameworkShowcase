pipeline {
    agent any

    environment {
        OrangeHrm_username = credentials('OrangeHrm_username')
        OrangeHrm_password = credentials('OrangeHrm_password')
        OrangeHrm_url = credentials('OrangeHrm_url')
        Base_url = credentials('Base_url')
        Username = credentials('Username')
        Password = credentials('Password')
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t playwright-automation .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo 'Running Playwright tests...'
                sh '''
                    docker run --rm \
                    -e OrangeHrm_username=${OrangeHrm_username} \
                    -e OrangeHrm_password=${OrangeHrm_password} \
                    -e OrangeHrm_url=${OrangeHrm_url} \
                    -e Base_url=${Base_url} \
                    -e Username=${Username} \
                    -e Password=${Password} \
                    -v ${WORKSPACE}/playwright-report:/app/playwright-report \
                    playwright-automation
                '''
            }
        }

    }

    post {
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Tests failed!'
        }
        always {
            sh 'docker rmi playwright-automation || true'
            echo 'Cleanup done.'
        }
    }
}