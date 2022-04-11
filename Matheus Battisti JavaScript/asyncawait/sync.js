
// function primeiraFuncao() {
	
// 	return new Promise((resolve) => {
		
// 		setTimeout(() => {
// 			console.log('esperou isso aqui')
// 			resolve()
// 		},1000)
// 	})
// }

// async function segundaFuncao() {
// 	console.log('iniciou')

// 	await primeiraFuncao()

// 	console.log('terminou')
// }

// segundaFuncao()

//prartico 
function getUser(id) {
	return fetch(`https://reqres.in/api/users?id=${id}`)
		.then(data => data.json())
		.catch(err => console.log(err))
}

async function showUserName(id) {
	const user = await getUser(id)

	console.log(`o nome do usuario é: ${user.data.first_name}`)
}

showUserName(3)