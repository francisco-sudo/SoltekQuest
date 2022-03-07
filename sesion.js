const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnQuest = document.querySelector(".quest-btn"),
    CreateQuest = document.querySelector(".create-quest"),
    Option1 = document.querySelector(".option");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-visible");
});

document.addEventListener("click", e =>{
    if(e.target === btnQuest /*|| e.target === btnSignUp*/){
        CreateQuest.classList.toggle("active");
        Option1.classList.toggle("active");
    }
});

/*dropdown options*/
const WithOutAns = document.querySelector(".without-ans"),
    OptionMultiple = document.querySelector(".option-multiple"),
    Abierta = document.querySelector(".abierta");

function selectelement(){
    let dropdownnans = document.getElementById("typeanswers");
    let answer = dropdownnans.value;
    if(answer == "multiple"){
        OptionMultiple.classList.toggle("active");
        Abierta.classList.toggle("desactive");;
    }
    if(answer == "abierta" ){
        Abierta.classList.toggle("active");
        OptionMultiple.classList.toggle("desactive");;
    }
}