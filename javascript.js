const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll('.navlink');
const navlink_a =document.querySelectorAll(".navlink_a");
window.addEventListener('scroll', ()=> {
    let current="";
    sections.forEach(section =>{
        const sectionTop= section.offsetTop;
        const sectionHeight=section.clientHeight;
        if(pageYOffset >=sectionTop){
            current=section.getAttribute('id');
        }    
    })
    console.log(current);
    navlink_a.forEach( a =>{
        a.classList.remove("active");
        if(a.getAttribute('name')==current){
            a.classList.add("active");
        }
    })
})