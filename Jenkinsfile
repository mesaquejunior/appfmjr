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
        sh 'export  ${env.WORKSPACE}'
        sh 'npm run install'
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