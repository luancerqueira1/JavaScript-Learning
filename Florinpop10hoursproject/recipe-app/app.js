

const meals = document.getElementById('meals')

getRandomMeal()
async function getRandomMeal () {
	const response = await fetch(
		"https://www.themealdb.com/api/json/v1/1/random.php"
	);
	const respData = await response.json();
	const randomMeal = respData.meals[0]
	console.log(respData.meals[0]);

	addMeal(randomMeal,true)
}


async function getMealById(id) {
	const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id);
}


async function getMealBySearch(term) {
	const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

function addMeal(mealData, random = false){
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
	meal.querySelector('.meal-body .fav-btn').addEventListener('click', () => {
		alert('oi')
	})
	
	meals.appendChild(meal)
}