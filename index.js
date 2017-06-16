var express = require('express');
var app = express();
var url = require('url');

//just a test
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/getRate', function(request, response) {
	handleRates(request, response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function handleRates(request, response) {
	var requestUrl = url.parse(request.url, true);

	console.log("Query parameters: " + JSON.stringify(requestUrl.query));

	// TODO: Here we should check to make sure we have all the correct parameters
	var weight = Number(requestUrl.query.weight);
	var type = String(requestUrl.query.type);
	//var operand2 = Number(requestUrl.query.operand2);

	computeRates(response, weight, type);
}

function computeRates(response, weight, type) {
	//op = op.toLowerCase();

	var result = 0;

	if (type == "Letters_Stamped" && weight < 2) {
		result = "U$ " + 0.49;
	} else if (type == "Letters_Stamped" && weight < 3) {
		result = "U$ " + 0.70;		
	} else if (type == "Letters_Stamped" && weight < 3.5) {
		result = "U$ " + 0.91;
	} else if (type == "Letters_Stamped" && weight == 3.5) {
		result = "U$ " + 1.12;
	}/* else {
		result = "Weight overloaded, please select 1 until 3.5 oz";
	}*/
	
	else if (type == "Letters_Metered" && weight < 2) {
		result = "U$ " + 0.46;
	} else if (type == "Letters_Metered" && weight < 3) {
		result = "U$ " + 0.67;		
	} else if (type == "Letters_Metered" && weight < 3.5) {
		result = "U$ " + 0.88;
	} else if (type == "Letters_Metered" && weight == 3.5) {
		result = "U$ " + 1.09;
	}/* else {
		result = "Weight overloaded, please select 1 until 3.5 oz";
	}*/
	
	else if (type == "Large_Envelopes_Flats" && weight < 2) {
		result = "U$ " + 0.98;
	} else if (type == "Large_Envelopes_Flats" && weight < 3) {
		result = "U$ " + 1.19;		
	} else if (type == "Large_Envelopes_Flats" && weight < 4) {
		result = "U$ " + 1.40;
	} else if (type == "Large_Envelopes_Flats" && weight < 5) {
		result = "U$ " + 1.61;
	} else if (type == "Large_Envelopes_Flats" && weight < 6) {
		result = "U$ " + 1.82;		
	} else if (type == "Large_Envelopes_Flats" && weight < 7) {
		result = "U$ " + 2.03;		
	} else if (type == "Large_Envelopes_Flats" && weight < 8) {
		result = "U$ " + 2.24;		
	} else if (type == "Large_Envelopes_Flats" && weight < 9) {
		result = "U$ " + 2.45;		
	} else if (type == "Large_Envelopes_Flats" && weight < 10) {
		result = "U$ " + 2.66;		
	} else if (type == "Large_Envelopes_Flats" && weight < 11) {
		result = "U$ " + 2.87;		
	} else if (type == "Large_Envelopes_Flats" && weight < 12) {
		result = "U$ " + 3.08;		
	} else if (type == "Large_Envelopes_Flats" && weight < 13) {
		result = "U$ " + 3.29;		
	} else if (type == "Large_Envelopes_Flats" && weight < 14) {
		result = "U$ " + 3.50;		
	}/* else {
		result = "Weight overloaded, please select 1 until 13.9 oz";
	}*/
	
	else if (type == "Parcels" && weight < 5) {
		result = "U$ " + 2.67;
	} else if (type == "Parcels" && weight < 6) {
		result = "U$ " + 2.85;		
	} else if (type == "Parcels" && weight < 7) {
		result = "U$ " + 3.03;		
	} else if (type == "Parcels" && weight < 8) {
		result = "U$ " + 3.21;		
	} else if (type == "Parcels" && weight < 9) {
		result = "U$ " + 3.39;		
	} else if (type == "Parcels" && weight < 10) {
		result = "U$ " + 3.57;		
	} else if (type == "Parcels" && weight < 11) {
		result = "U$ " + 3.75;		
	} else if (type == "Parcels" && weight < 12) {
		result = "U$ " + 3.93;		
	} else if (type == "Parcels" && weight < 13) {
		result = "U$ " + 4.11;		
	} else if (type == "Parcels" && weight < 14) {
		result = "U$ " + 4.29;		
	} else {
		result = "Weight overloaded, please select 1 to 3.5oz for Letters and others 1 to 13.9oz";
	}
	
	// Set up a JSON object of the values we want to pass along to the EJS result page
	var params = {weight: weight, type: type, result: result};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/result', params);
}
