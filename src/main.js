/* eslint-disable no-unused-vars */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Cocktail } from './cocktail';

$(document).ready(function () {
  let newCocktail = new Cocktail();
  let listPromise = newCocktail.getAllIngredients();
  listPromise.then(function (response) {
    let body = JSON.parse(response);
    for (let i = 0; i < body.drinks.length; i++) {
      $("#ingredient-modal-body").append(`<li>${body.drinks[i].strIngredient1}</li>`);
    }
  });


  $("#search-by-name").submit(function (event) {
    event.preventDefault();
    $("#searchByNameBody").html("");
    let userSearchName = $("#nameInput").val();
    let promise = newCocktail.searchCocktailByName(userSearchName);
    let list;

    promise.then(function (response) {
      let body = JSON.parse(response);
      list = body.drinks;
      let ingredientList = "";
      for (let i = 1; i < 16; i++) {
        // if(Object.values(body.drinks[0])[i] != "") {
        //   ingredientList = ingredientList + "\n" + Object.values(body.drinks[0])[i];
        // }
        let nameVariable = "strIngredient" + i;
        console.log(nameVariable);
        if(body.drinks[0][nameVariable] != "") {
          ingredientList += "<br>- " + body.drinks[0][nameVariable];
        }
      }
      for (let i = 0; i < body.drinks.length; i++) {
        $("#searchByNameBody").append(`<img src="${body.drinks[i].strDrinkThumb}"><li>Name: ${body.drinks[i].strDrink}<ul><li>ID: ${body.drinks[i].idDrink}</li><li>Category: ${body.drinks[i].strIBA}</li><li>Ingredient: ${ingredientList}</li><li>Instructions: ${body.drinks[i].strInstructions}</li></ul></li><br><hr>`);
      }
    });
  });

  $("#search-by-ingredient").submit(function (event) {
    event.preventDefault();
    $("#searchByIngredientBody").html("");
    let userIngredientInput = $("#ingredientInput").val();
    let promise = newCocktail.searchAllByIngredient(userIngredientInput);
    let list;

    promise.then(function (response) {
      let body = JSON.parse(response);
      list = body.drinks;
      console.log(body);
      for (let i = 0; i < body.drinks.length; i++) {
        $("#searchByIngredientBody").append(`<li>Name: ${body.drinks[i].strDrink}<ul><li>ID: ${body.drinks[i].idDrink}</li></ul></li><br>`);
      }
    });


  });

  $("#search-by-id").submit(function (event) {
    event.preventDefault();
    $("#searchByIdBody").html("");
    let userIdInput = $("#idInput").val();
    let promise = newCocktail.searchCocktailById(userIdInput);
    let list;

    promise.then(function (response) {
      let body = JSON.parse(response);
      list = body.drinks;
      console.log(body);
      for (let i = 0; i < body.drinks.length; i++) {
        $("#searchByIdBody").append(`<li>Name: ${body.drinks[i].strDrink}<ul><li>ID: ${body.drinks[i].idDrink}</li></ul></li><br>`);
      }
    });
  });


});