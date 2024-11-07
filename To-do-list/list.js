const addDoings = document.querySelector('.addList button')
const addInput = document.querySelector('.addList input')
const list = document.querySelector('.list ul')
addDoings.addEventListener('click', (event) =>{
    event.preventDefault()
    const addNewDoings = addInput.value
    if (addNewDoings.trim() === "") 
        return;
    
    const  newDoings = document.createElement('li')
    newDoings .innerHTML = `
    <div class="listName">${addNewDoings}
                    <input type="checkbox"></div>
                    <div class="deleteBtn">Delete</div>`;

    if (addNewDoings!= ""){
        list.appendChild(newDoings)
        addInput.value =""
    }
    saveTask();                
})

const searchDoings = document.querySelector('.input')
const searchInput = document.querySelector('.input input')
searchDoings.addEventListener('input', (event) => {
    event.preventDefault();
    const input = searchInput.value.toLowerCase()
    const getDoings = document.getElementsByClassName('listName')

    for (let search = 0; search < getDoings.length; search++){
        const DoingTitle = getDoings[search].innerHTML
        if(DoingTitle.toLowerCase(DoingTitle).includes(input) && input !== ""){
            getDoings[search].parentElement.style.display = "block"
        }
        else{
            getDoings[search].parentElement.style.display = "none"
        }
    }
})

list.addEventListener('click', (event) =>{
    const deleteList = event.target.className
    if(deleteList == "deleteBtn"){
        const litarget = event.target.parentNode
        list.removeChild(litarget)
    }
})

function saveTask(){
    localStorage.setItem("Task", list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem("Task")
}
showTask();