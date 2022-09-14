/*swich toggle style*/
const styleSwichToggler = document.querySelector('.style-swicher-toggler');
styleSwichToggler.addEventListener("click" ,() =>{
    document.querySelector('.style-swicher').classList.toggle("open");
})

window.addEventListener("scroll", () =>{
    if(document.querySelector('.style-swicher').classList.contains("open"))
    {
        document.querySelector('.style-swicher').classList.remove('open');
    }
})

function ToggleNavBack(){
    document.querySelector(".nav").classList.remove("DropDown");
}

for (var i = 0; i < navlink_a.length; i++) {
    navlink_a[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    ToggleNavBack();
});
}

 
const alternaStyles= document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternaStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}


const NightDay= document.querySelector(".day-night");
NightDay.addEventListener("click",() =>{
    NightDay.querySelector("i").classList.toggle("fa-sun");    
    NightDay.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        NightDay.querySelector("i").classList.add("fa-sun");
    }else{
        NightDay.querySelector("i").classList.add("fa-moon");
        
    }
})
const Nav= document.querySelector(".nav-toggler");
Nav.addEventListener("click",() =>{
    document.querySelector(".nav").classList.toggle("DropDown");

})



var typed=new Typed(".typing",{
    strings:["Fullstack developer","Frontend developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})









