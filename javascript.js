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