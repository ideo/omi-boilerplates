var $ = require('jquery')

$(document).ready(function($) {
	console.log('That page is loaded');	
	setInterval(() => {
		console.log(this);
	}, 1500);
});