hamburger=document.querySelector(".hamburger");
         hamburger.onclick=function(){
         navBar=document.querySelector(".nav");
         navBar.classList.toggle("active");
         }


// testimonial

var btn = document.getElementsByClassName("btn6");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
  slide.style.transform = "translateX(0px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active2");
  }
  this.classList.add("active2");
}
btn[1].onclick = function(){
  slide.style.transform = "translateX(-800px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active2");
  }
  this.classList.add("active2");
}
btn[2].onclick = function(){
  slide.style.transform = "translateX(-1600px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active2");
  }
  this.classList.add("active2");
}
btn[3].onclick = function(){
  slide.style.transform = "translateX(-2400px)";
  for(i=0;i<4;i++){
    btn[i].classList.remove("active2");
  }
  this.classList.add("active2");
}