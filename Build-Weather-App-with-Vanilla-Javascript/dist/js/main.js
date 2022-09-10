
import { setLocationObject, getHomeLocation} from './dataFunctions.js';
import { addSpinner, displayError } from './domFunctions.js';

import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
   //add listeners
   const geoButton = document.getElementById('getLocation');
   geoButton.addEventListener('click', getGeoWeather);
   const homeButton = document.getElementById('home');
   homeButton.addEventListener('click',loadWeather)
   //set up

   //load weather
   loadWeather();
}

document.addEventListener('DOMContentLoaded', initApp);

const getGeoWeather = (event) => {
   if (event) {
      if (event.type === 'click') {
         const mapIcon = document.querySelector('.fa-map-marker-alt');
         addSpinner(mapIcon);
      }
   }
   if (!navigator.geolocation) geoError();
   navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

const geoError = (errObj) => {
   const errMsg = errObj ? errObj.message : 'geolocation no suported';
   displayError(errMsg, errMsg);
};

const geoSuccess = (position) => {
   const myCoordsObj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`
   };
   //set location object
   setLocationObject(currentLoc, myCoordsObj);
   updateDataAndDisplay(currentLoc);
}

const loadWeather = (event) => {
   const savedLocation = getHomeLocation();
   if (!savedLocation && !event) return getGeoWeather();
   if (!savedLocation && event.type == 'click') {
      displayError('no home location saved', 'sorry.please save your home location first');
   }
   else if (savedLocation && !event) {
      displayHomeLocationWeather(savedLocation);
   }
   else {
      const homeIcon = document.querySelector('.fa-home');
      addSpinner(homeIcon);
      displayHomeLocationWeather(savedLocation);
   }
};
const displayHomeLocationWeather = (home)=>{
   
}

const updateDataAndDisplay = async (locationObj) => {
   // const weatherJson = await getGeoWeatherFromCoords(locationObj);
   // if (weatherJson) updateDisplay(weatherJson, locationObj);
};
