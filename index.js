var request = require('request');
var async = require('async');

exports.distance = function(p1, p2) {
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

exports.getAddress = function(lati, long,callback) {
	var data = [];
	var object ={}
	var latLong = lati + "," + long;
	async.waterfall([
		function(cb) {
			var latLong = lati + "," + long;
			var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latLong + "&sensor=true"
			request(url, function(error, response, body) {
				if (!error && response.statusCode == 200) {

					cb(null, body)
				}
			});
		}
	], function(err, result) {
		if (err)
			return callback(err);
		else {
			
			result = JSON.parse(result);
			// console.log(result.results[0].formatted_address);
			var address = result.results[0].formatted_address;
			var postal_code = result.results[0].address_components[result.results[0].address_components.length-1].long_name;
			var country_code =result.results[0].address_components[6].short_name;

			data.address = address ;
			data.postal_code = postal_code ;
			data.country_code = country_code ;

			return callback(null,data);
		}
	});
}
