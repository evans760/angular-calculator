angular.module('Calculator', [])

.controller('CalcCtrl', ['$scope', function($scope) {
  console.log('calc ctrl!');
  $scope.screen = "0";
  $scope.clearScreen = false;
  $scope.pervNumber = null;
  $scope.prevAction = null;
  $scope.numberPress = function(number) {
    if ($scope.clearScreen){

    $scope.screen = number.toString();
    $scope.clearScreen = false;
  return;
}

    if ($scope.screen === '0'){
      $scope.screen = number.toString();
  }else {
    $scope.screen += number.toString();
  }
};

$scope.pressOperator = function(operator) {
  if ($scope.prevAction === '=' && operator === '=') return;

  if ($scope.prevAction) {
    $scope.screen = parseInt($scope.screen) + parseInt($scope.pervNumber);
    $scope.prevAction = operator;
    $scope.prevAction = null;
    return;
  }

  $scope.pervNumber = $scope.screen;
  $scope.prevAction = operator;
  $scope.clearScreen = true;
}
  $scope.clear = function(){
  $scope.screen = '0';
};
}]);
