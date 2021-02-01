const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    /* if(hours < 10){
        clockTitle.innerHTML = `${hours}:0${minutes}:${seconds}`;
    }
    if(minutes < 10){
        clockTitle.innerHTML = `${hours}:0${minutes}:${seconds}`;
    }
    else if(seconds >= 0 && seconds <= 9){
        clockTitle.innerHTML = `${hours}:${minutes}:0${seconds}`;
    }
    else{
        clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    이렇게 긴 코드를 아래의 한 줄로 줄여서 쓸 수 있다.(삼항 연산자 x > y ? x : y, 조건식이 참이면 x, 거짓이면 y를 리턴)
    */
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
                            minutes < 10 ? `0${minutes}` : minutes}:${
                            seconds < 10 ? `0${seconds}` : seconds}`;
    
}
function init(){
    setInterval(getTime,1000);
}

init();