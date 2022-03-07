const mainTask = document.getElementById('main-task')
const addButton = document.getElementById('add-button')
const containerTasks = document.getElementById('container')
mainTask.focus()
var cont = 0


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
    

        edit.addEventListener('click', (event)=> {
            
                    
                    let idNumber = event.target.id.slice(11) //pega o numero da div pai do botão
                    let buttonClicked = event.target
                    let textSelected = document.getElementById('task-description'+idNumber)
                    
                if(buttonClicked.value == 'Edit'){
                    buttonClicked.value = 'Save'

                    textSelected.removeAttribute ("readonly")
                    textSelected.focus()
                }else{
                    buttonClicked.value = 'Edit'
                    textInput.setAttribute ('readonly','readonly')
                }
                
                
           
        })

        remove.addEventListener('click', (event)=> {
            
            let idNumber = event.target.id.slice(14)
            console.log('id number' + idNumber)
            let divSelected = document.getElementById(idNumber)
            containerTasks.removeChild(divSelected)  

    })



 
})




function CreateNewDiv(){
    let newTask = mainTask.value
   cont ++

    tasks = document.createElement('div')
    tasks.classList.add('tasks')
    tasks.setAttribute('id',cont)

    containerTasks.appendChild(tasks)

    checkbox = document.createElement('input')
    checkbox.type = 'checkbox' 
    checkbox.name = 'checkbox'
    checkbox.id = 'checkbox' + cont
    checkbox.value = 'checkbox'
    checkbox.classList.add('checkbox') //teste

    textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.name = 'task-description'
    textInput.id = 'task-description' + cont
    textInput.value = newTask
    textInput.setAttribute('readonly', 'readonly')
    textInput.classList.add('task-description') //teste

    edit = document.createElement('input')
    edit.type = 'button'
    edit.name = 'edit-button'
    edit.id = 'edit-button' + cont
    edit.value = 'Edit'
    edit.classList.add('edit-button') //teste


    remove = document.createElement('input')
    remove.type = 'button'
    remove.name = 'remove-button'
    remove.id = 'remove-buttonn' + cont
    remove.value = 'Remove'
    remove.classList.add('remove-button') //teste

    tasks.appendChild(checkbox)
    tasks.appendChild(textInput)
    tasks.appendChild(edit)
    tasks.appendChild(remove)

    
   

    console.log(cont)
    // tasks.appendChild(newContentDiv)

}

