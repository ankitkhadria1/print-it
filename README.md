Geo_decoder
==========

synopsis for getting address
--------

```javascript
var geo = require('geo_decoder');

geo.getAddress(latitude, longitude, function(err, result) {
	if (err) {
		console.log(err);
	} else {

		console.log(result);
}
// response
{ address: 'A-4, NH 64, Green Enclave, Lohgarh, Zirakpur, Punjab 140603, India',
  postal_code: '140603',
  country_code: 'PB',
  country: 'Punjab' }
```

synopsis for getting longitude and latitude
--------

```javascript
var geo = require('geo_decoder');
geo.getLatLong("Enter Your Address Here",function(err,result){
	// console.log('err===',err,result);
	if(err){
		console.log(err);
	}else{

console.log(result);

	}
});
// response
{ latitude: 30.7112416, longitude: 76.7927981 }

```

synopsis for getting distance between longitude and latitude
--------

```javascript
var geo = require('geo_decoder');
var point1 = {
	x1: 1,
	y1: 1
};
var point2 = {
	x2: 4,
	y2: 5
};
var distace = geo.distance(point1, point2);
console.log("Distance between: ", point1, " and ", point2, " is:", distace);

```