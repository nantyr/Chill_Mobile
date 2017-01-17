angular.module('controller', [])

  .controller('LoginCtrl', function(){})
  
  .controller('InscriptionCtrl', function(){})
  
  .controller('MatchsCtrl', function(){})
  
  .controller('ChatCtrl', function($scope, $stateParams){
      $scope.title = $stateParams.idChat
  })
  
  .controller('EvenementsCtrl', function(){})
  
  .controller('DetailsEvenementCtrl', function($scope, $stateParams){
      $scope.title = $stateParams.idEvenement
  })