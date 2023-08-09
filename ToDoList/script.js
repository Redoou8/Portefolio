var addButton = document.querySelector('#ajout');
var toDo = document.querySelector('#toDo');
var input = document.querySelector('#inputField');

// Charger les tâches depuis le localStorage lors du chargement initial de la page
window.addEventListener('load', function() {
    var savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        toDo.innerHTML = savedTasks;
        setupTaskListeners();
    }
});

addButton.onclick = function(){
    if(input.value !== "") {
        var paragraph = document.createElement('p');
        paragraph.innerText = input.value;
        toDo.appendChild(paragraph);
        input.value = "";
        paragraph.classList.add('pStyle');
        
        setupTaskListeners(); // Appeler la fonction pour ajouter les écouteurs aux nouvelles tâches
        
        // Sauvegarder les tâches dans le localStorage
        saveTasksToLocalStorage();
    }
}

function setupTaskListeners() {
    var tasks = document.querySelectorAll('.pStyle');
    
    tasks.forEach(function(task) {
        task.addEventListener('click', function() {
            task.classList.add('pClick');
            saveTasksToLocalStorage();
        });

        task.addEventListener('dblclick', function() {
            task.remove();
            saveTasksToLocalStorage();
        });
    });
}

function saveTasksToLocalStorage() {
    var tasks = toDo.innerHTML;
    localStorage.setItem('tasks', tasks);
}
