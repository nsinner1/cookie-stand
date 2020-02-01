'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// var totalSoldCookies = ['Total'];

// Object for first location
var location1 = {
  name: 'Seattle',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  totalCookies: 0,
  dailyCookieSales: [],
  randomCust: function(){
    return (Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust +1)) + this.minHourlyCust);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < storeHours.length; i++){
      var hourlySoldCookies = Math.round(this.avgCookieSale * this.randomCust());
      this.dailyCookieSales.push(hourlySoldCookies);
      this.totalCookies += hourlySoldCookies;
    }
  },
  render: function(){
    var parentElement = document.getElementById('Seattle');
    var listElement = document.createElement('li');
    listElement.textContent = this.name;
    parentElement.appendChild(listElement);
    for(var i = 0; i < storeHours.length; i++){
      listElement = document.createElement('li');
      listElement.textContent = storeHours[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
      parentElement.appendChild(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = 'Total: ' + this.totalCookies;
    parentElement.appendChild(listElement);
  }
};

location1.cookiesEachHour();
location1.render();



var locationGlobal = [];

function CookieLocation(name, minHourlyCust, maxHourlyCust, avgCookieSale){
  this.name = name;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookieSale = avgCookieSale;
  this.totalCookies = 0;
  locationGlobal.push(this);
}

new CookieLocation('Tokyo', 3, 24, 1.2);
console.log(locationGlobal[0]);

// CookieLocation.prototype.randomCust = function(){
//     return this.name + 'Tokyo';
// };

// console.log(CookieLocation[0].randomCust());


// Object for second location
// var location2 = {
//   name: 'Tokyo',
//   minHourlyCust: 3,
//   maxHourlyCust: 24,
//   avgCookieSale: 1.2,
//   totalCookies: 0,
//   randomCust: function getRandomIntInclusive(){
//     var tokyoElement = document.getElementById('Tokyo');
//     for(var j = 0; j < storeHours.length; j++){
//       var hourlySoldCookies = (Math.round(this.avgCookieSale * Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust));
//       this.totalCookies += hourlySoldCookies;

//       var listElement = document.createElement('li');
//       listElement.textContent = `${storeHours[j]} ${hourlySoldCookies} cookies.`;
//       tokyoElement.appendChild(listElement);
//     }
//     var totalElement = document.getElementById('Total2');
//     var listElement = document.createElement('li');
//     listElement.textContent = `${totalSoldCookies} ${this.totalCookies} cookies.`;
//     totalElement.appendChild(listElement);
//   }
// };
// location2.randomCust();


// // Object for third location
// var location3 = {
//   name: 'Dubai',
//   minHourlyCust: 11,
//   maxHourlyCust: 38,
//   avgCookieSale: 3.7,
//   totalCookies: 0,
//   randomCust: function getRandomIntInclusive(){
//     var dubaiElement = document.getElementById('Dubai');
//     for(var k = 0; k < storeHours.length; k++){
//       var hourlySoldCookies = (Math.round(this.avgCookieSale * Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust));
//       this.totalCookies += hourlySoldCookies;

//       var listElement = document.createElement('li');
//       listElement.textContent = `${storeHours[k]} ${hourlySoldCookies} cookies.`;
//       dubaiElement.appendChild(listElement);
//     }
//     var totalElement = document.getElementById('Total3');
//     var listElement = document.createElement('li');
//     listElement.textContent = `${totalSoldCookies} ${this.totalCookies} cookies.`;
//     totalElement.appendChild(listElement);
//   }
// };
// location3.randomCust();

// // Object for fourth location
// var location4 = {
//   name: 'Paris',
//   minHourlyCust: 20,
//   maxHourlyCust: 38,
//   avgCookieSale: 2.3,
//   totalCookies: 0,
//   randomCust: function getRandomIntInclusive(){
//     var parisElement = document.getElementById('Paris');
//     for(var l = 0; l < storeHours.length; l++){
//       var hourlySoldCookies = (Math.round(this.avgCookieSale * Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust));
//       this.totalCookies += hourlySoldCookies;

//       var listElement = document.createElement('li');
//       listElement.textContent = `${storeHours[l]} ${hourlySoldCookies} cookies.`;
//       parisElement.appendChild(listElement);
//     }
//     var totalElement = document.getElementById('Total4');
//     var listElement = document.createElement('li');
//     listElement.textContent = `${totalSoldCookies} ${this.totalCookies} cookies.`;
//     totalElement.appendChild(listElement);
//   }
// };
// location4.randomCust();


// // Object for fifth location
// var location5 = {
//   name: 'Lima',
//   minHourlyCust: 2,
//   maxHourlyCust: 16,
//   avgCookieSale: 4.6,
//   totalCookies: 0,
//   randomCust: function getRandomIntInclusive(){
//     var limaElement = document.getElementById('Lima');
//     for(var m = 0; m < storeHours.length; m++){
//       var hourlySoldCookies = (Math.round(this.avgCookieSale * Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust));
//       this.totalCookies += hourlySoldCookies;

//       var listElement = document.createElement('li');
//       listElement.textContent = `${storeHours[m]} ${hourlySoldCookies} cookies.`;
//       limaElement.appendChild(listElement);
//     }
//     var totalElement = document.getElementById('Total5');
//     var listElement = document.createElement('li');
//     listElement.textContent = `${totalSoldCookies} ${this.totalCookies} cookies.`;
//     totalElement.appendChild(listElement);
//   }
// };
// location5.randomCust();


