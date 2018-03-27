//TEST Rss2JsonKey: tk4mfz4k6mwzaiij1xwhthroeexo5rxreucayn2z

export { fetchRSSFeed };

function fetchRSSFeed(url, count, rss2jsonApiKey) {	
	let countQuery = "";
	rss2jsonApiKey = "tk4mfz4k6mwzaiij1xwhthroeexo5rxreucayn2z";
	
	if (count != null && !isNaN(parseInt(count))) {
		//if a count is given
		countQuery = "&count=" + count;
	}	
	
	let fetchUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${rss2jsonApiKey}${countQuery}`;
	console.log("Fetch url is: " + fetchUrl);
	
	return fetch(fetchUrl).then(function(response) {
		return response.json();
	})
	.then(function(jsonData) {
		console.log(jsonData);
		return jsonData;
	});	
}