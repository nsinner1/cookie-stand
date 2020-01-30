'use strict';

var storeHoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var location1 = {
  name: 'Seattle',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookieSale: 6.3,
  randomCust: function getRandomIntInclusive(){
    return Math.round(Math.random() * (this.minHourlyCust, this.maxHourlyCust) + this.minHourlyCust);
  }
};

console.log(location1.name);
console.log(location1.randomCust());
