const mainTask = document.getElementById('main-task')
const addButton = document.getElementById('add-button')
const containerTasks = document.getElementById('container')

// console.log(addButton)
addButton.addEventListener('click', (event) => {
    event.preventDefault()
    let newTask = mainTask.value
    if(newTask==""){
        alert("Please, add a task!")
    return
    }

    //mainTask.value = "" //apaga o valor do input quando clica no botão

    CreateNewDiv(newTask)
    mainTask.value = ""
    
 


})

function CreateNewDiv(){
    let newTask = mainTask.value
    //console.log(newTask)

    var tasks = document.createElement('div')
    tasks.classList.add('tasks')

    containerTasks.appendChild(tasks)

    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox' 
    checkbox.name = 'checkbox'
    checkbox.id = 'checkbox'
    checkbox.value = 'checkbox'

    var textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.name = 'task-description'
    textInput.id = 'task-description'
    textInput.value = newTask
    textInput.setAttribute('readonly', 'readonly')

    var edit = document.createElement('input')
    edit.type = 'button'
    edit.name = 'edit-button'
    edit.id = 'edit-buttonn'
    edit.value = 'Edit'

    var remove = document.createElement('input')
    remove.type = 'button'
    remove.name = 'remove-button'
    remove.id = 'remove-buttonn'
    remove.value = 'Remove'


    tasks.appendChild(checkbox)
    tasks.appendChild(textInput)
    tasks.appendChild(edit)
    tasks.appendChild(remove)

    
   

    console.log(newTask)
    // tasks.appendChild(newContentDiv)

}

