/* eslint-disable no-unused-vars */
var Promise = require('es6-promise').Promise;

export class Cocktail {
  searchCocktailByName(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  searchCocktailById(id) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
    });
  }

  searchAllByIngredient(ingredient) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
    });
  }

  getAllIngredients() {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
  
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
    });
  }
}