angular.module('marvel.models.superheroes', [

])
    .service('SuperHeroesModel', function ($http, $q) {
        var publicKey= "5a237863b3cc2061003cbbc4fe20dc06";
        var apiKey = "fbf255068eccea6d0ef951b9f25626b57ab2fe72";
        var model = this,
            URLS = {
                characters:'https://gateway.marvel.com/v1/public/characters',
            };

        model.getCharacters = function(limit,offset, nameStartsWith) {
            return $http.get(URLS.characters,{
                params: {limit: limit,
                apikey: publicKey,
                offset: offset*limit,
                nameStartsWith: nameStartsWith
                }
                }).then(function successCallback(response) {
              ;
                    return response.data.data;
                }, function errorCallback(response) {

                });;
        };

          model.getCharacter = function(idhero){

            return $http.get(URLS.characters+"/"+idhero,{
                params: {
                    apikey: publicKey
                }
                }).then(function successCallback(response) {
                    return response.data.data;

                }, function errorCallback(response) {
                    return response;
                });

        }  

    });

