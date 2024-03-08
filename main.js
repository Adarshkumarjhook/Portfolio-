var about_btn =document.getElementById("about_btn");
var more_info_ab_box =document.getElementById("more_info_ab_box");

about_btn.addEventListener("click",()=>{
  more_info_ab_box.style.transform="translateX(0%)"
});

/*
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page_1",
    start: "60% 60%",
    end: "+=800",
    scrub: 2,
    pin: true,
    markers: true
  }
});



tl.to(".my_name",{
  //fontSize:"20000px",
  //y:"-500vw",
//  x:"-50vw",
  
})

tl.from(".my_name", {
 fontSize: "100000px",
 color: "#8654F7",
  transform: "translateX(-1100px) translatey(-1500px)",
    transitionTimingFunction: "linear",

})

*/


var cl_pro = document.querySelector(".project_link");

cl_pro.addEventListener("click",(e)=>{
  e.preventDefault();
  var line = cl_pro.closest('.project').querySelector('.circle-extension');
 
 console.log(line)
 
})


var tll = gsap.timeline();


tll.to(".circle-extension_",{
  y:-300,
  duration:3,
  
},"a")


tll.from(".vertical-line_",{
  y:230,
  duration:3,
})



