const saveToStorage = (key, saveObj) => {
	if (!window.localStorage) {
		console.error("No local storage available.");
		return;
	}

	let saveString = JSON.stringify(saveObj);
	localStorage.setItem(key, saveString);
}

const getFromStorage = (key) => {
	if (!window.localStorage) {
		console.error("No local storage available.");
		return null;
	}

	let str = localStorage.getItem(key);
	if (str === null || str === undefined) return str;
	
	let returnObject = JSON.parse(str);
	return returnObject;
}

export { saveToStorage, getFromStorage }