const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    });

    toDos = cleanToDos;
    saveToDos();

}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    li.id = newId; // li에게 id를 부여

    const toDoObj = {
        text: text,
        id : newId //맨 처음엔 toDos Array가 비어있으니까 id 값은 1일 것이다.
    }
    toDos.push(toDoObj); //이렇게 push를 써서 array 안에 element 하나를 넣어줄 수 있다. 이 경우에는 toDos Array안에 toDoObj를 넣게 되는 것이다.
    saveToDos();

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //TODOS_LS = 'toDos'
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();