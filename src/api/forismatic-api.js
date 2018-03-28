function fetchQuote() {	
	let key = Math.floor(Math.random() * 1000000);
	let url = `https://glacial-fortress-87562.herokuapp.com/https%3A%2F%2Fapi.forismatic.com%2Fapi%2F1.0%2F?key=${key}`;
	
	return fetch(url).then(function(response) {
		return response.json();
	})
	.then(function(jsonData) {
		console.log(jsonData);
		return jsonData;
	});		
}

export default fetchQuote;