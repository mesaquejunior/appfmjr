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
    stage('Sonarqube Scanner') {
        steps {
            withSonarQubeEnv(credentialsId: 'sonarqube-auth') {
                sh "${scannerHome}/sonar-scanner/bin/sonar-scanner " +
                "-Dsonar.projectVersion=1.0 " +
                "-Dsonar.language=js " +
                "-Dsonar.sourceEncoding=UTF-8 " +
                "-Dsonar.exclusions=src/*tests*/*.test.ts" +
                "-Dsonar.test.inclusions=src/*tests*/*.test.ts " +
                "-Dsonar.typescript.lcov.reportPaths=coverage/lcov.info " +
                "-Dsonar.testExecutionReportPaths=coverage/clover.xml " +
                "-Dsonar.projectKey=job-hello-principal " +
                "-Dsonar.exclusions=node_modules/*,dist/*,src/*tests*/*,assets/*,coverage/*"
            }
        }
    }    
  }
}