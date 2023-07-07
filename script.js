hamburger=document.querySelector(".hamburger");
         hamburger.onclick=function(){
         navBar=document.querySelector(".nav");
         navBar.classList.toggle("active");
         }


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });


    

    // table

    //name
let a = document.getElementById("ainput");
let a1 = document.getElementById("a-error");


function validateaname()
{
   if(a.value===""){
      a1.innerHTML="please enter the First name";
    a.style.border="4px solid red";
    return false;
   }
   else if(a.value.length<3 || a.value.length>15){
      a1.innerHTML="Characters of the First name should be Min 3 and Max 15";
      a.style.border="4px solid red";
    return false;
   } 
   else{
      a1.innerHTML="";
      a.style.border="4px solid green";
      return true;
   }

}


//e-mail
let c = document.getElementById("dinput");
let c1 = document.getElementById("d-error");


function validatedname()
{
   if(c.value===""){
      c1.innerHTML="please enter the valid email";
    c.style.border="4px solid red";
    return false;
   }
   else if(!c.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      c1.innerHTML="please enter the valid email-id";
      c.style.border="4px solid red";
    return false;
   } 
   else{
      c1.innerHTML="";
      c.style.border="4px solid green";
      return true;
   }
}


//address
let x = document.getElementById("finput");
let x1 = document.getElementById("f-error");

function validatefname()
{
   if(x.value===""){
      x1.innerHTML="please enter the valid Address";
    x.style.border="4px solid red";
    return false;
   }
   else if(!x.value.match(/^[a-z A-Z 0-9 . , / -]*$/)){
      x1.innerHTML="please enter the valid Address";
      x.style.border="4px solid red";
    return false;
   } 
   else{
      x1.innerHTML="";
      x.style.border="4px solid green";
      return true;
   }
}


form.addEventListener('submit',e=>{
  e.preventDefault();
  checkinput();
})