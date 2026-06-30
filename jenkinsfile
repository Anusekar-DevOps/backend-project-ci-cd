pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script {
                    sh '''
                    echo "🔐 Switching to ubuntu user and running deploy script..."
                    sudo -u ubuntu bash -c 'chmod +x /home/ubuntu/backend-project-ci-cd/deploy.sh && cd /home/ubuntu/backend-project-ci-cd && ./deploy.sh'
                    '''
                }
            }
        }
    }
}
