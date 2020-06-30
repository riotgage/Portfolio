var fadeIn = {
    duration:2000,
    reset:true
};


ScrollReveal().reveal('.info',fadeIn);

var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    delay:100,
    duration:2000,
    reset:true
};

ScrollReveal().reveal('#pro', slideRight);

var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay:100,
    duration:2000,
    reset:true
};

ScrollReveal().reveal('.about-pic', slideLeft);
ScrollReveal().reveal('.about-heading',fadeIn)
ScrollReveal().reveal('.about-info',slideRight)

count=0
var pic=document.getElementById("pic")
setInterval(()=>{
    count=(count+1)%4;
    s="../img/img"+count+".jpg"
    pic.src=s;
},2000)