/*swich toggle style*/
const styleSwichToggler = document.querySelector('.style-swicher-toggler');
styleSwichToggler.addEventListener("click" ,() =>{
    document.querySelector('.style-swicher').classList.toggle("open");
})
function a (){
    console.log("helo")    

}

window.addEventListener("scroll", () =>{
    if(document.querySelector('.style-swicher').classList.contains("open"))
    {
        document.querySelector('.style-swicher').classList.remove('open');
    }
})

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









