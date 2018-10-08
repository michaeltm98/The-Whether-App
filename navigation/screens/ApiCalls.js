var iconImage1 = require('../assets/images/1-weather-image.png');
var iconImage2 = require('../assets/images/2-weather-image.png');
var iconImage3 = require('../assets/images/3-weather-image.png');
var iconImage4 = require('../assets/images/4-weather-image.png');
var iconImage5 = require('../assets/images/5-weather-image.png');
var iconImage6 = require('../assets/images/6-weather-image.png');
var iconImage7 = require('../assets/images/7-weather-image.png');
var iconImage8 = require('../assets/images/8-weather-image.png');
var iconImage11 = require('../assets/images/11-weather-image.png');
var iconImage12 = require('../assets/images/12-weather-image.png');
var iconImage13 = require('../assets/images/13-weather-image.png');
var iconImage14 = require('../assets/images/14-weather-image.png');
var iconImage15 = require('../assets/images/15-weather-image.png');
var iconImage16 = require('../assets/images/16-weather-image.png');
var iconImage17 = require('../assets/images/17-weather-image.png');
var iconImage18 = require('../assets/images/18-weather-image.png');
var iconImage19 = require('../assets/images/19-weather-image.png');
var iconImage20 = require('../assets/images/20-weather-image.png');
var iconImage21 = require('../assets/images/21-weather-image.png');
var iconImage22 = require('../assets/images/22-weather-image.png');
var iconImage23 = require('../assets/images/23-weather-image.png');
var iconImage24 = require('../assets/images/24-weather-image.png');
var iconImage25 = require('../assets/images/25-weather-image.png');
var iconImage26 = require('../assets/images/26-weather-image.png');
var iconImage29 = require('../assets/images/29-weather-image.png');
var iconImage30 = require('../assets/images/30-weather-image.png');
var iconImage31 = require('../assets/images/31-weather-image.png');
var iconImage32 = require('../assets/images/32-weather-image.png');
var iconImage33 = require('../assets/images/33-weather-image.png');
var iconImage34 = require('../assets/images/34-weather-image.png');
var iconImage35 = require('../assets/images/35-weather-image.png');
var iconImage36 = require('../assets/images/36-weather-image.png');
var iconImage37 = require('../assets/images/37-weather-image.png');
var iconImage38 = require('../assets/images/38-weather-image.png');
var iconImage39 = require('../assets/images/39-weather-image.png');
var iconImage40 = require('../assets/images/40-weather-image.png');
var iconImage41 = require('../assets/images/41-weather-image.png');
var iconImage42 = require('../assets/images/42-weather-image.png');
var iconImage43 = require('../assets/images/43-weather-image.png');

import { AsyncStorage } from "react-native"



export default class CommonDataManager {

    static myInstance = null;

    _iconsArray = [iconImage1, iconImage2, iconImage3, iconImage4, iconImage5, iconImage6, iconImage7, iconImage8, "placeholder9", "placeholder10", 
    iconImage11, iconImage12, iconImage13, iconImage14, iconImage15, iconImage16, iconImage17, iconImage18, iconImage19, iconImage20, iconImage21,
    iconImage22, iconImage23, iconImage24, iconImage25, iconImage26, "placeholder27", "placeholder28", iconImage29, iconImage30, iconImage31, 
    iconImage32, iconImage33, iconImage34, iconImage35, iconImage36, iconImage37, iconImage38, iconImage39, iconImage40, iconImage41,
     iconImage42, iconImage43]

    _itemsArray = [];

    _userName = "";
    _latitude = 0;
    _longitude = 0;
    _locationKey = 0;
    _currentTemperatureImperialValue = 0;
    _isDayTime = false;
    _currentWindSpeed = 0;

    _maxTempToday = 0;
    _minTempToday = 0;
    _precipitationProbability = null;
    _iconToday = 1;
    _iconPhrase = "";

    _lowerBody = 0;
    _upperBody = 0;
    _shoes = 0;


    _mainBackground = "https://i.pinimg.com/originals/c0/7d/20/c07d20c457264a85224d6b9f0e9165f2.jpg"



    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }





    // _storeData = async () => {
    //   try {
    //     await AsyncStorage.multiSet([
    //         ["longitude", this.getLongitude() + ""],
    //         ["latitude", this.getLatitude() + ""]
    //      ])
    //   } catch (error) {
    //     // Error saving data
    //   }
    // }



    //     _retrieveData = async () => {
    //   try {

    //     await AsyncStorage.multiGet(['longitude', 'latitude']).then((data) => {
    //         let longitude = data[0][1];
    //         let latitude = data[1][1];

    //             console.log("longitude from data", longitude);
    //             console.log("latitude from data", latitude);
    //             //Your logic
    //     });
    //   } catch (error) {
    //     // Error saving data
    //   }
    // }














    getMainBackground(){
        return "https://i.pinimg.com/originals/c0/7d/20/c07d20c457264a85224d6b9f0e9165f2.jpg";
    }

    getLowerBody(){
        return this._lowerBody;
    }

    getUpperBody(){
        return this._upperBody;
    }

    getShoes(){
        return this._shoes;
    }

    setLowerBody(number) {
        this._lowerBody = number;
    }

    setUpperBody(number) {
        this._upperBody = number;
    }

    setShoes(number) {
        this._shoes = number;
    }

    addToItemsArray(item){
        this._itemsArray.push(item);
    }

    getItemsArray(){
        return this._itemsArray;
    }

    getItemsNeededString() {
        let itemsNeededString = ""
        // this._itemsArray.forEach((item) => {
        //     itemsNeededString += '• ' + item.getName() + '\n';
        // });

        if(this.getCurrentTemp() < this.getLowerBody()){
            itemsNeededString += "• Pants\n"
        }
        else{
            itemsNeededString += "• Shorts\n"
        }

        if(this.getCurrentTemp() < this.getUpperBody()){
            itemsNeededString += "• Jacket\n"
        }
        else{
            itemsNeededString += "• Shirt\n"
        }

        if(this.getCurrentTemp() < this.getShoes()){
            itemsNeededString += "• Boots\n"
        }
        else{
            itemsNeededString += "• Sneakers\n"
        }








        return itemsNeededString;
    }

    getUserName() {
        return this._userName;
    }

    setUserName(id) {
        this._userName = id;
    }

    getLatitude() {
        return this._latitude;
    }

    getLongitude() {
        return this._longitude;
    }

    getLocationKey() {
        return this._locationKey;
    }
    getCurrentTemp(){
        return this._currentTemperatureImperialValue;
    }
    getIsDayTime(){
        return this._isDayTime;
    }

    getCurrentWindSpeed() {
        return this._currentWindSpeed;
    }




    getMinTempToday() {
        return this._minTempToday;
    }
    getMaxTempToday() {
        return this._maxTempToday;
    }
    getPrecipitationProbability() {
        return this._precipitationProbability;
    }
    getIconToday() {
        return this._iconToday;
    }

    getIconImage(){
        console.log("Icon Number: ", this.getIconToday());
      return this._iconsArray[this.getIconToday() -1];
    }
    getIconPhraseToday() {
        return this._iconPhrase.substring(0,14);
    }





  getGeolocation() {



    //     navigator.geolocation.getCurrentPosition(
    //   (position) => {



    //     console.log(this._latitude);
    //     console.log(this._longitude);


    //   this.callAccuWeatherLocation();

    //   },
    //   (error) => this.setState({ error: error.message }),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    // );


        this._latitude = 40.80395403256236;
        this._longitude = -77.86551799362876;
      this.callAccuWeatherLocation();

        
        


  }



  callAccuWeatherLocation(){

    fetch('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=HackPSU2018' + '&q=' + this.getLatitude() + ',' + this.getLongitude() , {
  // mode: 'no-cors', 
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
},)
    .then((response) => {
      // console.log(response.headers.map["x-location-key"]);
      // console.log(response);

      this._locationKey = response.headers.map["x-location-key"];
      // this.setState({
      //   locationKey: response.headers.map["x-location-key"]});


      this.callAccuWeatherCurrentConditions();
      this.callAccuWeatherForecastConditions();
    })
    .catch((error) => {
      console.error(error);
    });

  }





  callAccuWeatherCurrentConditions() {
    fetch("http://dataservice.accuweather.com/currentconditions/v1/" + this.getLocationKey() + '?apikey=HackPSU2018&details=true')
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((response) => {
              // console.log(response);
        this._currentTemperatureImperialValue = response[0].Temperature.Imperial.Value;
        this._isDayTime = response[0].IsDayTime;
        this._currentWindSpeed = response[0].Wind.Speed.Imperial.Value;



    })
    .catch((error) => {
      console.error(error);
    })
  }

    callAccuWeatherForecastConditions() {
    fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + this.getLocationKey() + '?apikey=HackPSU2018&details=true')
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      this._minTempToday = response.DailyForecasts[0].Temperature.Minimum.Value;
      this._maxTempToday = response.DailyForecasts[0].Temperature.Maximum.Value;
      this._precipitationProbability = response.DailyForecasts[0].Day.PrecipitationProbability
      this._iconToday = response.DailyForecasts[0].Day.Icon
      this._iconPhrase = response.DailyForecasts[0].Day.IconPhrase
    })
    .catch((error) => {
      console.error(error);
    })
  }


}