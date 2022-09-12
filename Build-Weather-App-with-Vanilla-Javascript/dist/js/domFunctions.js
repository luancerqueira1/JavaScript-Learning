export const setPlaceholderText = () => {
   const input = document.getElementById('searchBar__text');
   window.innerWidth < 400
      ? (input.placeholder = 'city,state,country')
      : (input.placeholder = 'city,state, country,or zip code');
};

export const addSpinner = (element) => {
   animateButton(element);
   setTimeout(animateButton, 1000, element);
};

const animateButton = (element) => {
   element.classList.toggle('none');
   element.nextElementSibling.classList.toggle('block');
   // element.nextElementSibling.classList.toggle('none');
};

export const displayError = (headerMsg, srMsg) => {
   updateWeatherLocationHeader(headerMsg);
   updateScreenReaderConfirmation(srMsg);
};

export const displayApiError = (statusCode) => {
   const poperMsg = toProperCase(statusCode.message);
   updateScreenReaderConfirmation(poperMsg);
   updateScreenReaderConfirmation(`${poperMsg}. Please try again.`);
};

const toProperCase = (text) => {
   const words = text.split(' ');
   const propWords = words.map((word) => {
      return word.chartAt(0).toProperCase() + word.slice(1);
   });
   return propWords.join(' ');
};

const updateWeatherLocationHeader = (message) => {
   const h1 = document.getElementById('currentForecast__location');
   h1.textContent = message;
};

export const updateScreenReaderConfirmation = (message) => {
   document.getElementById('confirmation').textContent = message;
};
