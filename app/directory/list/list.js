


controller('ListResultCtrl', ['$state','$stateParams', 'SuperHeroesModel','$scope','SuperHeroesService', '$http',
function ($state, $stateParams, SuperHeroesModel,$scope,SuperHeroesService, $http) {

        //borrar
        $scope.title = "Testing AngularJS Applications";
        $scope.apiKey = "fbf255068eccea6d0ef951b9f25626b57ab2fe72";

        var listResultCtrl = this;
        var limit = $stateParams.limit;
        var offset = $stateParams.offset;
        var search = $stateParams.search;
        //save the information of the current lsit view
        SuperHeroesService.lastState = $state.current.name;
        SuperHeroesService.limit =  $stateParams.limit;
        SuperHeroesService.offset =  $stateParams.offset;
        SuperHeroesService.search =  $stateParams.search;


        SuperHeroesModel.getCharacters(limit, offset, search).
            then( function (superheroes) {
              listResultCtrl.superheroes = superheroes.results;
              listResultCtrl.total = superheroes.total;
              listResultCtrl.limit = superheroes.limit;
              listResultCtrl.count = superheroes.count;
              listResultCtrl.offset = superheroes.offset;
            });

    }])

