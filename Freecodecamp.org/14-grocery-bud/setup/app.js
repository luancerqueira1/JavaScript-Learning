// ****** SELECT ITEMS **********
const alerta = document.querySelector(".alert");
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false
let editID = ''

// ****** EVENT LISTENERS **********
// Submit Form
form.addEventListener('submit', addItem)
// clear itens
clearBtn.addEventListener('click', clearitens())
// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault()
	const value = grocery.value
	const id = new Date().getTime().toString()

	if (value && !editFlag) {
		const element = document.createElement('article')
		// Add clas
		element.classList.add('grocery-item')
		// add ID
		const attr = document.createAttribute("data-id")
		attr.value = id
		element.setAttributeNode(attr)
		element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn"><i class="fas fa-edit"></i> 
              </button>
              <button type="button" class="delete-btn"><i class="fas fa-trash"></i> 
              </button>
            </div>`;
		// apend child 
		list.appendChild(element)
		// display alert
		displayAlert("item aded to the list", "success");
		// show container 
		container.classList.add("show-container");
		// add to local storage 
		addToLocalStorage(id, value)
		// set back to defalt
		setBackToDefault()
	} else if (value && editFlag) {
		
	} else {
		displayAlert('Enter a value','danger')
	}
}

// Display Alert 
function displayAlert(text,action) {
	alerta.textContent =  text;
	alerta.classList.add(`alert-${action}`);
	// Remove alert
	setTimeout(function () {
		alerta.textContent = '';
   	alerta.classList.remove(`alert-${action}`);
	},2000)
}
//clear itens
function clearitens() {
	const itens = document.querySelectorAll('.grocery-item')
	if (itens.length > 0) {
		itens.forEach(function (item) {
			list.replaceChild(item)
		})
	}
}
// set back to defalt
function setBackToDefault(){
	grocery.value = ''
	editFlag = false
	editID = ''
	submitBtn.textContent = 'submit'
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value) {
	console.log('ok aded local');
}

// ****** SETUP ITEMS **********
