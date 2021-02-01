const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    todoform = document.querySelector(".js-toDoForm");

const USER_LS ="currentUser"; 
const SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS , text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add("showing");
    greeting.classList.remove("showing");
    form.addEventListener("submit",handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);//만약 반갑습니다 텍스트를 보여줄거라면 폼을 숨겨야 한다
    greeting.classList.add(SHOWING_ON);
    todoform.classList.add(SHOWING_ON);
    greeting.innerText = `반갑습니다, ${text}님!`;
    
    

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //user is not
        askForName()
    }else{
        //user is
        paintGreeting(currentUser);

    }
}
//loadName()의 역할은 localStorage에서 유저의 이름을 가져오는 것

function init(){
    loadName();
}

init();