'use strict';

function getDogImage(numberOfDogs=3) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results').html(`<img class="results-img">`);
    
  //creat variable of responsejson to append new pics
  //cannot replaceWith bc it will will 
  //not add more pics it just replace the same 1 pic
  for (let new1 of responseJson.message){
    $('.results').append(
        `<img src="${new1}" class="results-img">`);
    }
    //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numOfDogs= $('input[name="numOfDogs"]').val();
    getDogImage(numOfDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});