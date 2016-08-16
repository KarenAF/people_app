/*global angular */

(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [
      {
        name: "Maryjane",
        bio: "She is a girl, who cried a river and drowned the whole world",
        bioVisible: false
      },
      {
        name: "Jasper",
        bio: "He is a gemologist",
        bioVisible: false
      },
      {
        name: "Collin",
        bio: "He is a close family friend.",
        bioVisible: false
      }
     ];

$scope.showBio = function(person) {
  if(person.bioVisible === false) {
    person.bioVisible = true
  } else {
    person.bioVisible = false
  }
}

$scope.addPerson = function(inputName, inputBio) {
  var newPerson = {
    name: inputName,
    bio: inputBio,
    bioVisible: false
  };
  $scope.people.push(newPerson);
  $scope.newPersonnName = '';
  $scope.newPersonBio = '';
};

window.$scope = $scope;    


  });
})();
