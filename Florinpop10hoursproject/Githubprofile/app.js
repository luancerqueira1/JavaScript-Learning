
const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById("search");

getUser("luancerqueira1");

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();

  createUserCard(respData);
}

function createUserCard(user) {
  const cardHTML = `
	<div class="card">
		<div class="avatar-container">
			<img class="avatar"src="${user.avatar_url}" alt="${user.name}" />
		</div>
		<div class="user-info">
			<h2>${user.name}</h2>
			<p>${user.bio}</p>

			<ul class="info">
				<li>${user.followers}<strong>Folllowers </strong></li>
				<li>${user.following}<strong>Folllowing </strong></li>
				<li>${user.public_repos}<strong>Repositiry </strong></li>
			</ul>
			<ul id="repos">
			</ul>
		</div>
	</div>	
	`;

  main.innerHTML = cardHTML;
}


form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = '';
	}
});


