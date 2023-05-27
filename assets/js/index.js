let show = document.getElementById("collapseOne");
let screen = window.matchMedia("(min-width: 768px)");
let unRead1 = document.getElementById("unread1");
let unRead2 = document.getElementById("unread2");

const mostrarChats = (screen) => {
    if(screen.matches){
        show.classList.add('show')
    }else{
        show.classList.remove('show')
    }
}

const readText1 = () => {
    unRead1.style = "color: #e82626"
}

const readText2 = () => {
    unRead2.style = "color: #e82626"
}

mostrarChats(screen);
screen.addListener(mostrarChats)