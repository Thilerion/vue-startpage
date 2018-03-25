function locationPromise() {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
}

const options = {
	enableHighAccuracy: true,
	timeout: 10000
};

export default locationPromise;