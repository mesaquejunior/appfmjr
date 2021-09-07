pipeline {
  agent { label 'Alpha' }

  stages {
    stage('Checkout code'){
      steps {
        deleteDir()
        git branch: 'main', url: 'https://github.com/mesaquejunior/appfmjr'
      }
    }
    stage('Installing requirements') {
      steps {
        sh 'npm install'
      }
    }
    stage('Testing') {
      steps {
        sh 'npm run test'
        sh 'npm run coverage'
      }
    }
  }
}