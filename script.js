// UV SCALE CHECKER  BEG
var button = document.getElementsByClassName('.submitbtn');
var inputValue = document.querySelector('.inputValue');
var namelol = document.querySelector('.name');
var lon = document.querySelector('.lon');
var lat = document.querySelector('.lat');
var uvi = document.querySelector('.uvi');
var empty = $('.display');
var cont = $('.CityUV');

var temp = document.querySelector('.temp');
var addCityBtn = $('.addBtn');
var submitbtn = $('.submitbtn');
var cityInput = $('.inputValue');
var FST = $('#fstInput');
var SPF = $('#spfInput');



var number = 0
$('.submitbtn').on('click', function() {
   console.log("clickered")
  var uviSkinNum = $('#fstInput').val()
  var SPFvalue = $('#spfInput').val();
  console.log("skin type numeber:" + uviSkinNum)
  
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
      var tempValue = Math.floor((tempValueKelvin - 273.15) * 9 / 5 + 32) + "°"

      //  newdiv.append(`<p class="name"> ${nameValue}</p>`);
      //  newdiv.append(`<p class="temp"> ${tempValue}</p>`);
      //  newdiv.append(`<p class="coord" >(${lonValue},${latValue}) </p>`)
      console.log(tempValue)


      //cont.append(
      //            `<div class="newdiv"> 
      //     <p class="name"> ${nameValue}</p>
      //   <p class="coord" >(${lonValue},${latValue}) </p>
      //    <p class="temp"> ${tempValue}</p>
      //             <div>`)

      var myHeaders = new Headers();
      myHeaders.append("x-access-token", "ad0e6ec6efbbe2135e1fb5d2bbd5a16c\n");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      // Get API data from https://www.openuv.io/uvindex
      fetch(`https://api.openuv.io/api/v1/uv?lat=${latValue}&lng=${lonValue}`, requestOptions)
        .then(response => response.json())
        .then(odata => {
          console.log(odata)
          var uviValue = + odata["result"]["uv_max"]
          var uviValueR = Math.round(uviValue);
          console.log(uviValueR)
      //    console.log(numInput.value)
          
          var uviSkinString = String("st"+ uviSkinNum)
          console.log( "UVI SKIN STRING:" + uviSkinString)
         // var uviSkinMin =  odata["result"]["safe_exposure_time"][uviSkinString]
                    console.log("UVI SKIN TYPE:" + uviSkinMin)

          //  newdiv.append(`<p class = "temp"> ${uviValue} </p>`);
          //        <p class="coord" >(${lonValue},${latValue}) </p>
          
          var classuvi = "nothing";
          if (uviValueR < 10) {
            classuvi = 'uvicss1'
          }
            else {
            classuvi = 'uvicss'

          }
          
          var uviSkinMin;
          if (uviSkinNum == 1){
          uviSkinMin =  SPFvalue * ((200 * 2.5)/(3 * uviValueR))
            console.log(uviSkinMin)
          }
          else if(uviSkinNum == 2){
            uviSkinMin =  SPFvalue * ((200 * 3)/(3 * uviValueR))
                        console.log(uviSkinMin)
          }
          else if(uviSkinNum == 3){
            uviSkinMin =  SPFvalue * ((200 * 4)/(3 * uviValueR))
                        console.log(uviSkinMin)
          }
          else if(uviSkinNum == 4){
            uviSkinMin =  SPFvalue * ((200 * 5)/(3 * uviValueR))
                    console.log(uviSkinMin)
          }
          else if(uviSkinNum == 5){
           uviSkinMin =   SPFvalue * ((200 * 8)/(3 * uviValueR))
                    console.log(uviSkinMin)
          }
          else if(uviSkinNum == 6){
            uviSkinMin =  SPFvalue * ((200 * 15)/(3 * uviValueR))
                      console.log(uviSkinMin)
          }
          else {
             uviSkinMin = odata["result"]["safe_exposure_time"][uviSkinString]
            alert("SPF not Entered")
          }
          
          var uviSkinMinRound = Math.round(uviSkinMin);
          
          if (uviSkinMinRound>60){
            var uviSkinHr =  Math.round(uviSkinMinRound/60)
            var uviSkinMinute = uviSkinMinRound%60
            uviSkinMinRound = `${uviSkinHr} Hours and ${uviSkinMinute} Minutes `
              
          };
          console.log("hi babe")
          cont.append(
            `<div class="newdiv"> 
        <p class="name"> ${nameValue} ${tempValue} </p>
        <p class="uvheading" > UV </p>
         <p class="indexheading" > index </p>
        <p class = ${classuvi} id="uvLabel">  ${uviValueR}</p>
        <p class= "smalltext"> You can stay in the sun for ${uviSkinMinRound}  </p>
                 <div>`)




        })

        .catch(error => console.log('error', error));
    }

    )
        .catch(error => alert("This city was not found. Make sure the spelling is correct and that you have typed the full name of the city. "));

  cityInput.toggleClass('invisible');
  FST.toggleClass('invisible');
    SPF.toggleClass('invisible');
  submitbtn.toggleClass('invisible');
  addCityBtn.toggleClass('visible');
}
);


$('.addBtn').on('click', function() {
  FST.toggleClass('visible');
  SPF.toggleClass('visible');
  cityInput.toggleClass('visible');
  submitbtn.toggleClass('visible');
  var minus = "broooo"
  $('#btn1').innerHTML = minus;
});

// UV SCALE CHECKER END

// FITZPATRICK SCALE START 

var moreInfoBtn = $("#infobtn");
var info = $(".infoFitz");
moreInfoBtn.on("click", biggerm);

function biggerm() {
  info.toggleClass('bigger')
};




// FITZPATRICK SCALE END 