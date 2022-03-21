pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                checkout scm
                withCredentials([string(credentialsId: 'somkiat-password', variable: 'XXX_PASS')]) {
                    echo ${XXX_PASS};
                }
            }
        }
    }
}
