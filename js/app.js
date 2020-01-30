'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var location1 = {
  name: 'Seattle',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  randomCust: function getRandomIntInclusive(){
    return Math.round(Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust);
  }
};

for(var i = 0; i < storeHours.length; i++){
  console.log(location.name, storeHours[i]);
  var hourlySoldCookies = location1.avgCookieSale * location1.randomCust;
  console.log(hourlySoldCookies);
//   create var for multipling randomCust with avgCookieSale = number of cookies sold that hour
// create li in HTML for each store with <ul id="hfjdabfhadsb">
// create var for HTML element (li) = document.createElement('li')
// HTML element.textContent = string that you want it to read (7am: 500 cookies) by concat 
// append cookies sold that hour to the li
}
console.log(location1.name);
console.log(location1.randomCust());
