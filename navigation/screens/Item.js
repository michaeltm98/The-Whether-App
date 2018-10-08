export default class UserItem {

	constructor(name, maxTemp, maxWind, maxHumidity){
		this._name = name;
		this._maxTemp = maxTemp;
		this._maxWind = maxWind;
		this._maxHumidity = maxHumidity;
	}


	getName(){
		return this._name;
	}

	getMaxTemp(){
		return this._maxTemp;
	}

	getMaxWind() {
		return this._maxWind;
	}

	getMaxHumidity() {
		return this._maxHumidity;
	}



}