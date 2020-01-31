'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var totalSoldCookies = ['Total'];

// Object for first location
var location1 = {
  name: 'Seattle',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  totalCookies: 0,
  randomCust: function getRandomIntInclusive(){
    var seattleElement = document.getElementById('Seattle');
    for(var i = 0; i < storeHours.length; i++){
      var hourlySoldCookies = (Math.round(this.avgCookieSale * Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust));
      this.totalCookies += hourlySoldCookies;
      console.log(this.totalCookies + 'total');

      var listElement = document.createElement('li');
      listElement.textContent = `${storeHours[i]} ${hourlySoldCookies} cookies.`;
      seattleElement.appendChild(listElement);
      console.log(storeHours[i]);
      console.log(storeHours[i] + ' ' + hourlySoldCookies);
    }
    var totalElement = document.getElementById('Total');
    var listElement = document.createElement('li');
    listElement.textContent = `${totalSoldCookies} ${this.totalCookies} cookies.`;
    totalElement.appendChild(listElement);
  }
};
location1.randomCust();


// Object for second location
// var location2 = {
//   name: 'Tokyo',
//   minHourlyCust: 3,
//   maxHourlyCust: 24,
//   avgCookieSale: 1.2,
//   randomCust: function getRandomIntInclusive(){
//     return Math.round(Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust);
//   }
// };
// console.log(location2.name);
// console.log(location2.randomCust());

// Loop for second location
// for(var j = 0; j < storeHours.length; j++){
//     console.log(location.name, storeHours[j]);
//   var hourlySoldCookiesTokyo = location2.avgCookieSale * location2.randomCust;
//   console.log(hourlySoldCookies);
//   var listElement = document.createElement('li');
//   listElement.textContent = `${storeHours} ${hourlySoldCookiesTokyo} cookies.`;
// }

// Object for third location
// var location3 = {
//   name: 'Dubai',
//   minHourlyCust: 11,
//   maxHourlyCust: 38,
//   avgCookieSale: 3.7,
//   randomCust: function getRandomIntInclusive(){
//     return Math.round(Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust);
//   }
// };
// console.log(location3.name);
// console.log(location3.randomCust());

// Loop for third location
// for(var k = 0; k < storeHours.length; k++){
//     console.log(location.name, storeHours[k]);
//   var hourlySoldCookiesDubai = location3.avgCookieSale * location3.randomCust;
//   console.log(hourlySoldCookies);
//   var listElement = document.createElement('li');
//   listElement.textContent = `${storeHours} ${hourlySoldCookiesDubai} cookies`;
// }

// Object for fourth location
// var location4 = {
//   name: 'Paris',
//   minHourlyCust: 20,
//   maxHourlyCust: 38,
//   avgCookieSale: 2.3,
//   randomCust: function getRandomIntInclusive(){
//     return Math.round(Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust);
//   }
// };
// console.log(location4.name);
// console.log(location4.randomCust());

// Loop for fourth location
// for(var l = 0; l < storeHours.length; l++){
//     console.log(location.name, storeHours[l]);
//   var hourlySoldCookiesParis = location4.avgCookieSale * location4.randomCust;
//   console.log(hourlySoldCookies);
//   var listElement = document.createElement('li');
//   listElement.textContent = `${storeHours} ${hourlySoldCookiesParis} cookies`;
// }

// Object for fifth location
// var location5 = {
//   name: 'Lima',
//   minHourlyCust: 2,
//   maxHourlyCust: 16,
//   avgCookieSale: 4.6,
//   randomCust: function getRandomIntInclusive(){
//     return Math.round(Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust);
//   }
// };
// console.log(location5.name);
// console.log(location5.randomCust());

// Loop for fifth location
// for(var m = 0; m < storeHours.length; m++){
//     console.log(location.name, storeHours[m]);
//   var hourlySoldCookiesLima = location5.avgCookieSale * location5.randomCust;
//   console.log(hourlySoldCookies);
//   var listElement = document.createElement('li');
//   listElement.textContent = `${storeHours} ${hourlySoldCookiesLima} cookies`;
// }
