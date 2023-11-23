var button = document.getElementsByClassName('.submitbtn');
var inputValue = document.querySelector('.inputValue');
var namelol = document.querySelector('.name');
var lon = document.querySelector('.lon');
var lat = document.querySelector('.lat');
var uvi = document.querySelector('.uvi');
var empty = $('.display');
var cont = $('.div');

var temp = document.querySelector('.temp');
var addCityBtn = $('.addBtn');
var submitbtn = $('.submitbtn');
var cityInput = $('.inputValue');
var number = 0
$('.submitbtn').on('click', function() {
  number += 1
  console.log("num=" + number)
  // Get API data from https://openweathermap.org/

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + ' &appid=424d2512a319b7892170a6e060e5e100')

    .then(response => response.json())
    .then(data => {
      console.log(data);
      var nameValue = data['name'];
      var tempValueKelvin = data['main']['temp'];
      var lonValue = data['coord']['lon'];
      var latValue = data['coord']['lat'];
      var tempValue = Math.floor((tempValueKelvin - 273.15) * 9 / 5 + 32) + "℉"

    //  newdiv.append(`<p class="name"> ${nameValue}</p>`);
    //  newdiv.append(`<p class="temp"> ${tempValue}</p>`);
    //  newdiv.append(`<p class="coord" >(${lonValue},${latValue}) </p>`)
      console.log(tempValue)
          cont.append(
                `<div class="newdiv"> 
        <p class="name"> ${nameValue} ${tempValue} </p>
        <p class="uvheading" > UV </p>
         <p class="indexheading" > index </p>
        <p class = "uvicss"> 2</p>
                 <div>`)

        
   //cont.append(
    //            `<div class="newdiv"> 
   //     <p class="name"> ${nameValue}</p>
     //   <p class="coord" >(${lonValue},${latValue}) </p>
    //    <p class="temp"> ${tempValue}</p>
    //             <div>`)
      
     
      
    }

    )
        .catch(error => alert("city not found"));

  cityInput.toggleClass('invisible');
  submitbtn.toggleClass('invisible');
    addCityBtn.toggleClass('visible');

}
);


$('.addBtn').on('click', function() {

  cityInput.toggleClass('visible');
  submitbtn.toggleClass('visible');
  var minus = "broooo"
  $('#btn1').innerHTML = minus;
});