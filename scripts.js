const mainTask = document.getElementById('main-task')
const addButton = document.getElementById('add-button')
const containerTasks = document.getElementById('container')
mainTask.focus()

// console.log(addButton)
addButton.addEventListener('click', (event) => {
    event.preventDefault()
    
    let newTask = mainTask.value
    mainTask.focus()

    if(newTask==""){
        alert("Please, add a task!")
    return
    }

    //mainTask.value = "" //apaga o valor do input quando clica no botão

    CreateNewDiv(newTask)
    mainTask.value = ""
    

        // edit.addEventListener('click', (event)=> {

        //         if(edit.value == 'Edit'){
        //             edit.value = 'Save'

        //             textInput.removeAttribute ("readonly")
        //             textInput.focus()
        //         }else{
        //             edit.value = 'Edit'
        //             textInput.setAttribute ('readonly','readonly')
        //         }



        // })

 
})




function CreateNewDiv(){
    let newTask = mainTask.value
    //console.log(newTask)

    tasks = document.createElement('div')
    tasks.classList.add('tasks')

    containerTasks.appendChild(tasks)

    checkbox = document.createElement('input')
    checkbox.type = 'checkbox' 
    checkbox.name = 'checkbox'
    checkbox.id = 'checkbox'
    checkbox.value = 'checkbox'

    textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.name = 'task-description'
    textInput.id = 'task-description'
    textInput.value = newTask
    textInput.setAttribute('readonly', 'readonly')

    edit = document.createElement('input')
    edit.type = 'button'
    edit.name = 'edit-button'
    edit.id = 'edit-buttonn'
    edit.value = 'Edit'

    remove = document.createElement('input')
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

