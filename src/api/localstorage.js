const saveToStorage = (key, saveObj) => {
	if (!window.localStorage) {
		console.error("No local storage available.");
		return;
	}

	let saveString = JSON.stringify(saveObj);
	localStorage.setItem(key, saveString);

	console.log("The following was saved to local storage:");
	console.log(localStorage.getItem(key));
}

const getFromStorage = (key) => {
	if (!window.localStorage) {
		console.error("No local storage available.");
		return null;
	}

	let str = localStorage.getItem(key);
	let returnObject = JSON.parse(str);
	console.log("The following was retrieved from local storage:");
	console.log(returnObject);
	return returnObject;
}

export { saveToStorage, getFromStorage }