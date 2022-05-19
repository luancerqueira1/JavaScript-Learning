

const mealsEl = document.getElementById('meals');
const favoritecontainer = document.getElementById("fav-meals");
const mealPopup = document.getElementById('meal-popup');
const mealInfoEl = document.getElementById('meal-info')
const popupClose = document.getElementById('close-popup')

const searchTerm = document.getElementById("search-term")
const searchBtn = document.getElementById("search")
getRandomMeal();
fetchFavMeals();

async function getRandomMeal () {
	const resp = await fetch(
		"https://www.themealdb.com/api/json/v1/1/random.php"
	);
	const respData = await resp.json();
	const randomMeal = respData.meals[0]

	addMeal(randomMeal,true)
}

async function getMealById(id) {
	const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

	const respData = await resp.json();

	const meal = respData.meals[0];

	return meal;
}

async function getMealBySearch(term) {
	const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);

	const respData = await resp.json();
	const meals = respData.meals;

	return meals;
}

function addMeal(mealData, random = false) {
	const meal = document.createElement('div');
	meal.classList.add('meal');

	meal.innerHTML = `
				<div class="meal-header">
				${random ? `
				<span class="random">Random Recipe </span>` : ''}
				<img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
				</div>
				<div class="meal-body">
					<h4>${mealData.strMeal}</h4>
					<button class="fav-btn">
						<i class="far fa-heart"></i>
					</button>
				</div>
				`;
	const btn = meal.querySelector(".meal-body .fav-btn");
		
	btn.addEventListener("click", () => {
		if (btn.classList.contains('active')) {
			removeMealLs(mealData.idMeal)
			btn.classList.remove("active");
		} else {
			addMealLs(mealData.idMeal);
      	btn.classList.add("active");
		}
		//clean the container 
		
			fetchFavMeals();
	});
	meal.addEventListener('click', () => {
		showMealInfo(mealData)
	})
	
	mealsEl.appendChild(meal);
}

function addMealLs(mealId) {
  const mealIds = getMealsLs();

  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLs(mealId) {
	const mealIds = getMealsLs();

	localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId))
	);
}

function getMealsLs() {
	const mealIds = JSON.parse(localStorage.getItem('mealIds'));

	return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
  //clean container
	favoritecontainer.innerHTML = "";
	
  const mealIds = getMealsLs();

  const meals = [];

  for (let i = 0; i < mealIds.length; i++) {
    const mealId = mealIds[i];
    meal = await getMealById(mealId);

    addMealFav(meal);
    meals.push(meal);
  }
}


function addMealFav(mealData) {
	
	const favMeal = document.createElement("li");

  favMeal.innerHTML = `
					<img src="${meal.strMealThumb}" 
					alt="${mealData.strMeal}">
					<span>${mealData.strMeal}</span>
					<button class="clear"><i class="fas fa-window-close"></i></button>
				`;
	const btn = favMeal.querySelector('.clear');
	btn.addEventListener('click', () => {
		removeMealLs(mealData.idMeal);

		fetchFavMeals();
	})

	
  favoritecontainer.appendChild(favMeal);
}

function showMealInfo(mealData) {
	//update meal info
	const mealEl = document.createElement('div');

	mealEl.innerHTM = `
		<h1>${mealData.strMeal}</h1>
		<img src="${mealData.strMealThumb}" alt="">
		
		<p>${mealData.strInstructions}</p>
		
		`;

	mealInfoEl.appendChild(mealEl);
	//show the popup
	mealPopup.classList.remove('hidden')
}

searchBtn.addEventListener('click', async () => {
	//clear container 
	mealsEl.innerHTML = "";
	const search = searchTerm.value;

	const meals = await getMealBySearch(search);
	if (meals) {
			meals.forEach((meal) => {
        addMeal(meal);
      });
	}
})

popupClose.addEventListener('click', () => {
	mealPopup.classList.add('hidden')
})
