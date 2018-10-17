import { Cocktail } from '../src/cocktail';
/* eslint-disable no-unused-vars */
describe('cocktail.js', function() {
    let cocktailName = "Moscow Mule";
    let ingredientName = "Vodka";
    let newCocktail;
    let id = 15346;

    beforeEach(function() {
        newCocktail = new Cocktail();
    })

    it('should grab Moscow Mule api request by name', function() {
        let promise = newCocktail.searchCocktailByName(cocktailName);
        let cocktail;
        
        return promise.then(function(response) {
            let body = JSON.parse(response);
            cocktail = body.drinks[0].strDrink;
            console.log(cocktail);
            expect(cocktail).toEqual("Moscow Mule");
        });
    });

    it('should show cocktails use vodka as ingredient', function() {
        let promise = newCocktail.searchAllByIngredient(ingredientName);
        let cocktail;
        
        return promise.then(function(response) {
            let body = JSON.parse(response);
            cocktail = body.drinks[1].strDrink;
            console.log(cocktail);
            expect(cocktail).toEqual("155 Belmont");
        });
    });

    it('should look up 155 Belmont by id 15346', function() {
        let promise = newCocktail.searchCocktailById(id);
        let cocktail;
        
        return promise.then(function(response) {
            let body = JSON.parse(response);
            cocktail = body.drinks[0].strDrink;
            console.log(cocktail);
            expect(cocktail).toEqual("155 Belmont");
        });
    });
});