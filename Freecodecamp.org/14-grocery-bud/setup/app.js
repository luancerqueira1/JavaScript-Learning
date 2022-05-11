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
clearBtn.addEventListener('click', clearItems)

const deleteBtn = document.querySelector("delete-btn");
console.log(deleteBtn);



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
		const deleteBtn = element.querySelector('.delete-btn')
		const editBtn = element.querySelector('.edit-btn')

		deleteBtn.addEventListener('click', deleteItem)
		editBtn.addEventListener('click', editItem)
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
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
	container.classList.remove("show-container")
	displayAlert("empty list", "danger")
	setBackToDefault()
	// localStorage.removeItem('list')
}
//edit functions 
function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement
	//set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling
	//set form value
	grocery.value = editElement.innerHTML
	editFlag = true
	editID = element.dataset.id
	submitBtn.textContent = "edit"
}
//delete functions 
function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement
	const id = element.dataset.id
	list.removeChild(element)
	if (list.children.length === 0) {
		container.classList.remove("show-container")
	}
	displayAlert('item removed', 'danger')
	setBackToDefault()
	//remove local storage
	// remoFromLocalStorage(id)
}

// set back to defalt
function setBackToDefault(){
	grocery.value = ''
	editFlag = false
	editID = ''
	submitBtn.textContent = 'submit'
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	
}

function remoFromLocalStorage(id) {
	
}
// ****** SETUP ITEMS **********
