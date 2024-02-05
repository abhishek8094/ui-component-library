const navList = document.querySelector(".navlist");
const social = document.querySelector(".socialmedia-link");
const hamburger = document.querySelector("#hamburger")
const cross = document.querySelector("#cross")

function showSidebar(){
    navList.style.display = "block";
    social.style.display = "block";
    cross.style.display = "block";
    hamburger.style.display = "none";
}

function hideSidebar(){
    navList.style.display = "none";
    social.style.display = "none";
    cross.style.display = "none";
    hamburger.style.display = "block";
}

//top function
function topFunction() {
    document.documentElement.scrollTop = 0;
}