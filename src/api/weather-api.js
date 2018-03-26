export { getTrueReducedWeatherResponse };

function getTrueReducedWeatherResponse({latitude, longitude}) {
	let url = `https://glacial-fortress-87562.herokuapp.com/https%3A%2F%2Fapi.darksky.net%2Fforecast/${latitude},${longitude}?lang=nl&units=ca&exclude=minutely,hourly,alerts,flags`
	return fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			return reduceApiResponse(json);
		})
}

function reduceApiResponse(resp) {
	let s = {
		latitude: resp.latitude,
		longitude: resp.longitude,
		retrievalDate: resp.currently.time * 1000,
		currentWeather: {
			temperature: resp.currently.temperature,
			apparentTemperature: resp.currently.apparentTemperature,
			summary: resp.currently.summary,
			icon: resp.currently.icon
		},
		dailyWeather: []
	};

	resp.daily.data.forEach(day => {
		let d = {
			time: day.time * 1000,
			summary: day.summary,
			icon: day.icon,
			temperatureHigh: day.temperatureHigh,
			temperatureLow: day.temperatureLow
		};
		s.dailyWeather.push(d);
	});
	return s;
}

/* RESPONSE URL: 
https://api.darksky.net/forecast/afe76404c3817e2d943b860cbd774e30/51.910871199999995,4.456558

OR

https://glacial-fortress-87562.herokuapp.com/https%3A%2F%2Fapi.darksky.net%2Fforecast/51.910871199999995,4.456558?lang=nl&units=ca&exclude=minutely,hourly,alerts,flags
*/

const testDarkSkyApi = {
	"latitude": 51.910871199999995,
	"longitude": 4.456558,
	"timezone": "Europe/Amsterdam",
	"currently": {
		"time": 1521827708,
		"summary": "Licht bewolkt",
		"icon": "partly-cloudy-night",
		"precipIntensity": 0,
		"precipProbability": 0,
		"temperature": 7.14,
		"apparentTemperature": 3.76,
		"dewPoint": 3.91,
		"humidity": 0.8,
		"pressure": 1001.61,
		"windSpeed": 20.2,
		"windGust": 38.25,
		"windBearing": 190,
		"cloudCover": 0.33,
		"uvIndex": 0,
		"visibility": 10.01,
		"ozone": 394.78
	},
	"daily": {
		"summary": "Regen op dinsdag en woensdag met temperaturen dalend tot 6°C op donderdag.",
		"icon": "rain",
		"data": [
			{
				"time": 1521759600,
				"summary": "Overwegend bewolkt gedurende de dag.",
				"icon": "partly-cloudy-day",
				"sunriseTime": 1521783536,
				"sunsetTime": 1521828058,
				"moonPhase": 0.21,
				"precipIntensity": 0.0203,
				"precipIntensityMax": 0.066,
				"precipIntensityMaxTime": 1521817200,
				"precipProbability": 0.31,
				"precipType": "rain",
				"temperatureHigh": 7.16,
				"temperatureHighTime": 1521828000,
				"temperatureLow": 3.96,
				"temperatureLowTime": 1521871200,
				"apparentTemperatureHigh": 3.8,
				"apparentTemperatureHighTime": 1521828000,
				"apparentTemperatureLow": 1.24,
				"apparentTemperatureLowTime": 1521871200,
				"dewPoint": 3.12,
				"humidity": 0.8,
				"pressure": 1005.71,
				"windSpeed": 19.02,
				"windGust": 44.4,
				"windGustTime": 1521810000,
				"windBearing": 198,
				"cloudCover": 0.62,
				"uvIndex": 2,
				"uvIndexTime": 1521802800,
				"visibility": 9.64,
				"ozone": 386.57,
				"temperatureMin": 4.86,
				"temperatureMinTime": 1521784800,
				"temperatureMax": 7.16,
				"temperatureMaxTime": 1521828000,
				"apparentTemperatureMin": 1.14,
				"apparentTemperatureMinTime": 1521792000,
				"apparentTemperatureMax": 3.98,
				"apparentTemperatureMaxTime": 1521831600
			},
			{
				"time": 1521846000,
				"summary": "Overwegend bewolkt gedurende de dag.",
				"icon": "partly-cloudy-day",
				"sunriseTime": 1521869796,
				"sunsetTime": 1521914560,
				"moonPhase": 0.25,
				"precipIntensity": 0.0051,
				"precipIntensityMax": 0.0152,
				"precipIntensityMaxTime": 1521871200,
				"precipProbability": 0.16,
				"precipType": "rain",
				"temperatureHigh": 11.86,
				"temperatureHighTime": 1521900000,
				"temperatureLow": 3.16,
				"temperatureLowTime": 1521957600,
				"apparentTemperatureHigh": 11.86,
				"apparentTemperatureHighTime": 1521900000,
				"apparentTemperatureLow": 1.49,
				"apparentTemperatureLowTime": 1521954000,
				"dewPoint": 4.08,
				"humidity": 0.77,
				"pressure": 1002.16,
				"windSpeed": 4.99,
				"windGust": 21.84,
				"windGustTime": 1521846000,
				"windBearing": 138,
				"cloudCover": 0.7,
				"uvIndex": 2,
				"uvIndexTime": 1521889200,
				"ozone": 393.69,
				"temperatureMin": 3.96,
				"temperatureMinTime": 1521871200,
				"temperatureMax": 11.86,
				"temperatureMaxTime": 1521900000,
				"apparentTemperatureMin": 1.24,
				"apparentTemperatureMinTime": 1521871200,
				"apparentTemperatureMax": 11.86,
				"apparentTemperatureMaxTime": 1521900000
			},
			{
				"time": 1521932400,
				"summary": "Overwegend bewolkt gedurende de dag.",
				"icon": "partly-cloudy-day",
				"sunriseTime": 1521956056,
				"sunsetTime": 1522001062,
				"moonPhase": 0.28,
				"precipIntensity": 0.0051,
				"precipIntensityMax": 0.0102,
				"precipIntensityMaxTime": 1521946800,
				"precipProbability": 0.07,
				"precipType": "rain",
				"temperatureHigh": 9.84,
				"temperatureHighTime": 1521982800,
				"temperatureLow": 1.89,
				"temperatureLowTime": 1522022400,
				"apparentTemperatureHigh": 7.97,
				"apparentTemperatureHighTime": 1521979200,
				"apparentTemperatureLow": -0.78,
				"apparentTemperatureLowTime": 1522026000,
				"dewPoint": 3.94,
				"humidity": 0.83,
				"pressure": 1008.84,
				"windSpeed": 10.19,
				"windGust": 27.95,
				"windGustTime": 1521993600,
				"windBearing": 341,
				"cloudCover": 0.81,
				"uvIndex": 2,
				"uvIndexTime": 1521979200,
				"ozone": 399.01,
				"temperatureMin": 3.16,
				"temperatureMinTime": 1521957600,
				"temperatureMax": 9.84,
				"temperatureMaxTime": 1521982800,
				"apparentTemperatureMin": 1.49,
				"apparentTemperatureMinTime": 1521954000,
				"apparentTemperatureMax": 7.97,
				"apparentTemperatureMaxTime": 1521979200
			},
			{
				"time": 1522015200,
				"summary": "Licht bewolkt gedurende de dag.",
				"icon": "partly-cloudy-day",
				"sunriseTime": 1522042322,
				"sunsetTime": 1522087559,
				"moonPhase": 0.32,
				"precipIntensity": 0.0025,
				"precipIntensityMax": 0.0076,
				"precipIntensityMaxTime": 1522022400,
				"precipProbability": 0.04,
				"precipType": "rain",
				"temperatureHigh": 9.88,
				"temperatureHighTime": 1522062000,
				"temperatureLow": 1.61,
				"temperatureLowTime": 1522130400,
				"apparentTemperatureHigh": 7.66,
				"apparentTemperatureHighTime": 1522058400,
				"apparentTemperatureLow": -2.22,
				"apparentTemperatureLowTime": 1522130400,
				"dewPoint": 2.76,
				"humidity": 0.82,
				"pressure": 1016.64,
				"windSpeed": 12.73,
				"windGust": 21.2,
				"windGustTime": 1522072800,
				"windBearing": 305,
				"cloudCover": 0.47,
				"uvIndex": 2,
				"uvIndexTime": 1522058400,
				"ozone": 415.93,
				"temperatureMin": 1.89,
				"temperatureMinTime": 1522022400,
				"temperatureMax": 9.88,
				"temperatureMaxTime": 1522062000,
				"apparentTemperatureMin": -0.78,
				"apparentTemperatureMinTime": 1522026000,
				"apparentTemperatureMax": 7.66,
				"apparentTemperatureMaxTime": 1522058400
			},
			{
				"time": 1522101600,
				"summary": "De avond regen en nacht lichte wind.",
				"icon": "rain",
				"sunriseTime": 1522128582,
				"sunsetTime": 1522174061,
				"moonPhase": 0.36,
				"precipIntensity": 0.5537,
				"precipIntensityMax": 2.1768,
				"precipIntensityMaxTime": 1522170000,
				"precipProbability": 0.52,
				"precipType": "rain",
				"temperatureHigh": 8.57,
				"temperatureHighTime": 1522152000,
				"temperatureLow": 2.47,
				"temperatureLowTime": 1522216800,
				"apparentTemperatureHigh": 5.56,
				"apparentTemperatureHighTime": 1522152000,
				"apparentTemperatureLow": -1.53,
				"apparentTemperatureLowTime": 1522216800,
				"dewPoint": 3.09,
				"humidity": 0.9,
				"pressure": 1011.08,
				"windSpeed": 15.13,
				"windGust": 60.33,
				"windGustTime": 1522141200,
				"windBearing": 197,
				"cloudCover": 0.86,
				"uvIndex": 2,
				"uvIndexTime": 1522152000,
				"ozone": 390.65,
				"temperatureMin": 1.61,
				"temperatureMinTime": 1522130400,
				"temperatureMax": 8.57,
				"temperatureMaxTime": 1522152000,
				"apparentTemperatureMin": -2.22,
				"apparentTemperatureMinTime": 1522130400,
				"apparentTemperatureMax": 5.56,
				"apparentTemperatureMaxTime": 1522152000
			},
			{
				"time": 1522188000,
				"summary": "De ochtend lichte regen en lichte wind vanaf de middag, houdt aan tot de avond.",
				"icon": "rain",
				"sunriseTime": 1522214843,
				"sunsetTime": 1522260562,
				"moonPhase": 0.39,
				"precipIntensity": 0.4877,
				"precipIntensityMax": 1.2954,
				"precipIntensityMaxTime": 1522195200,
				"precipProbability": 0.76,
				"precipType": "rain",
				"temperatureHigh": 3.79,
				"temperatureHighTime": 1522256400,
				"temperatureLow": -1.5,
				"temperatureLowTime": 1522303200,
				"apparentTemperatureHigh": -0.97,
				"apparentTemperatureHighTime": 1522213200,
				"apparentTemperatureLow": -6.07,
				"apparentTemperatureLowTime": 1522303200,
				"dewPoint": 1.1,
				"humidity": 0.85,
				"pressure": 1000.02,
				"windSpeed": 14.36,
				"windGust": 66.58,
				"windGustTime": 1522202400,
				"windBearing": 24,
				"cloudCover": 0.91,
				"uvIndex": 1,
				"uvIndexTime": 1522227600,
				"ozone": 417.63,
				"temperatureMin": 1.07,
				"temperatureMinTime": 1522234800,
				"temperatureMax": 7.12,
				"temperatureMaxTime": 1522188000,
				"apparentTemperatureMin": -5.17,
				"apparentTemperatureMinTime": 1522234800,
				"apparentTemperatureMax": 3.14,
				"apparentTemperatureMaxTime": 1522188000
			},
			{
				"time": 1522274400,
				"summary": "Overwegend bewolkt gedurende de dag.",
				"icon": "partly-cloudy-day",
				"sunriseTime": 1522301103,
				"sunsetTime": 1522347064,
				"moonPhase": 0.43,
				"precipIntensity": 0.0025,
				"precipIntensityMax": 0.0076,
				"precipIntensityMaxTime": 1522335600,
				"precipProbability": 0.12,
				"precipType": "rain",
				"temperatureHigh": 5.57,
				"temperatureHighTime": 1522332000,
				"temperatureLow": 0.64,
				"temperatureLowTime": 1522364400,
				"apparentTemperatureHigh": 2.32,
				"apparentTemperatureHighTime": 1522332000,
				"apparentTemperatureLow": -4.52,
				"apparentTemperatureLowTime": 1522364400,
				"dewPoint": -2.76,
				"humidity": 0.69,
				"pressure": 1017.59,
				"windSpeed": 12.67,
				"windGust": 47.44,
				"windGustTime": 1522357200,
				"windBearing": 42,
				"cloudCover": 0.66,
				"uvIndex": 2,
				"uvIndexTime": 1522321200,
				"ozone": 433.14,
				"temperatureMin": -1.5,
				"temperatureMinTime": 1522303200,
				"temperatureMax": 5.57,
				"temperatureMaxTime": 1522332000,
				"apparentTemperatureMin": -6.07,
				"apparentTemperatureMinTime": 1522303200,
				"apparentTemperatureMax": 2.32,
				"apparentTemperatureMaxTime": 1522332000
			},
			{
				"time": 1522360800,
				"summary": "Overwegend bewolkt gedurende de dag.",
				"icon": "partly-cloudy-day",
				"sunriseTime": 1522387364,
				"sunsetTime": 1522433566,
				"moonPhase": 0.47,
				"precipIntensity": 0.0762,
				"precipIntensityMax": 0.5232,
				"precipIntensityMaxTime": 1522443600,
				"precipProbability": 0.28,
				"precipType": "rain",
				"temperatureHigh": 6.22,
				"temperatureHighTime": 1522422000,
				"temperatureLow": 1.4,
				"temperatureLowTime": 1522450800,
				"apparentTemperatureHigh": 1.02,
				"apparentTemperatureHighTime": 1522422000,
				"apparentTemperatureLow": -5.11,
				"apparentTemperatureLowTime": 1522447200,
				"dewPoint": -3.58,
				"humidity": 0.6,
				"pressure": 1011.7,
				"windSpeed": 29.71,
				"windGust": 45.53,
				"windGustTime": 1522360800,
				"windBearing": 92,
				"cloudCover": 0.77,
				"uvIndex": 2,
				"uvIndexTime": 1522411200,
				"ozone": 431.83,
				"temperatureMin": 0.64,
				"temperatureMinTime": 1522364400,
				"temperatureMax": 6.22,
				"temperatureMaxTime": 1522422000,
				"apparentTemperatureMin": -4.52,
				"apparentTemperatureMinTime": 1522364400,
				"apparentTemperatureMax": 1.02,
				"apparentTemperatureMaxTime": 1522422000
			}
		]
	},
	"offset": 1
};