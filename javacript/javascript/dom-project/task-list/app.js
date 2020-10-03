//Define UI vars
const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
	//DOM load event
	document.addEventListener('DOMContentLoaded',getTasks);
	//add task event
	form.addEventListener('submit',addTask);
	//remove task event
	taskList.addEventListener('click',removeTask);
	//clear task event
	clearBtn.addEventListener('click',clearTasks);
	//filter tasks
	filter.addEventListener('keyup',filterTasks);
}

//Get Tasks from Local storage
function getTasks(){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task){
		//create li elements
		const li=document.createElement('li');
		//Add class
		li.className = 'collection-item';
		//create textnode and append to li
		li.appendChild(document.createTextNode(task));
		//create new link element
		const link=document.createElement('a');
		//add class
		link.className='delete-item secondary-content';
		//add icon html
		link.innerHtml= '<i class="fa fa-remove"></i>';
		//append link to li
		li.appendChild(link);

		//append li to ul
		taskList.appendChild(li);
	});
}

//Add task
function addTask(e){
	if(taskInput.value==='') {
		alert('Add a Task');
	}

	//create li elements
	const li=document.createElement('li');
	//Add class
	li.className = 'collection-item';
	//create textnode and append to li
	li.appendChild(document.createTextNode(taskInput.value));
	//create new link element
	const link=document.createElement('a');
	//add class
	link.className='delete-item secondary-content';
	//add icon html
	link.innerHtml= '<i class="fa fa-remove"></i>';
	//append link to li
	li.appendChild(link);

	//append li to ul
	taskList.appendChild(li);

	//store in local storage
	storageTaskInLocalStorage(taskInput.value);

	//clear input
	taskInput.value='';




	e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Remove task
function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are you sure?')){
			e.target.parentElement.parentElement.remove();

			//Remove from LS
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	}
}

//remove from LS
function removeTaskFromLocalStorage(taskItem){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}


	tasks.forEach(function(task,index){
		if(taskItem.textContent === task) {
			tasks.splice(index,1);
		}
	});

	localStorage.setItem('tasks',JSON.stringify(tasks));
}

//clear tasks
function clearTasks(){
	//taskList.innerHTML='';

	//does same as above but faster
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

	//diff between two:https://jsperf.com/innerhtml-vs-removechild

	//clear tasks from LS
	clearTasksFromLocalStorage();
}

//clear tasks from LS
function clearTasksFromLocalStorage() {
	localStorage.clear();
}

//filter task
function filterTasks(e){
	const text=e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(
		function(task){
			const item=task.firstChild.textContent;
			if(item.toLowerCase().indexOf(text) != -1){
				task.style.display = 'block';
			} else {
				task.style.display= 'none';
			}

		});
}