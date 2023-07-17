const menu = document.querySelector('.menu i');
const menuList = document.querySelector('ul');
menu.addEventListener('click',()=>{
  menu.classList.toggle('fs-xmark');
  menuList.classList.toggle('slide');
})


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