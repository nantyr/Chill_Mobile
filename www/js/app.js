// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // Each tab has its own nav history stack:

  .state('login', {
    url: '/login',
    views: {
      'profil': {
        templateUrl: 'profil/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  
  .state('inscription', {
    url: '/inscription',
    views: {
      'profil': {
        templateUrl: 'profil/inscription.html',
        controller: 'InscriptionCtrl'
      }
    }
  })
  
  .state('evenements',{
      url: '/evenements',
      views:{
          'evenement':{
              templateUrl:'evenement/evenements.html',
              controller: 'EvenementsCtrl'
          }
      }
  })
  
  .state('detailsEvenement',{
      url: '/detailsEvenement/:idEvenement',
      views:{
          'evenement':{
              templateUrl:'evenement/detailsEvenement.html',
              controller: 'DetailsEvenementCtrl'
          }
      }
  })
  
  .state('matchs', {
    url: '/matchs',
    views: {
      'message': {
        templateUrl: 'message/matchs.html',
        controller: 'MatchsCtrl'
      }
    }
  })
  
  .state('chat', {
    url: '/chat/:idChat',
    views: {
      'message': {
        templateUrl: 'message/chat.html',
        controller: 'ChatCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login')

});
