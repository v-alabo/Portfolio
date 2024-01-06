/* Theme switcther */
const icon = document.getElementById('theme-switch')
const body = document.querySelector('body')
icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  body.style.transition = '2s';
  this.classList.toggle('bi-sun')

}
/*
const body = document.querySelector('body')
const logo = document.querySelector('.logo')
const nav = document.querySelector('nav ul li a')
toggle.addEventListener('click', function(){
  this.classList.toggle('bi-sun')
  if(this.classList.toggle('bi-moon')){
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
    logo.style.color = 'white';
    nav.style.color = 'white'
  }else{
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s';
    logo.style.color = 'black';
    
   
  }
})
/* Loader section */

window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("loader-hidden");

  document.querySelector(".loader").addEventListener("transitionend", () =>{
      document.body.removeChild(document.querySelector(".loader"))
  })
})

/* About section */

var sublinks = document.getElementsByClassName("sub-link");
var subcontents = document.getElementsByClassName("sub-content");
   function opentab(subname){
     for(sublink of sublinks){
     sublink.classList.remove("activelink");
   }
   for(subcontent of subcontents){
     subcontent.classList.remove("activecont");
   }
   event.currentTarget.classList.add('activelink');
   document.getElementById(subname).classList.add('activecont');
  }  

/* Side-menu section */

  var sidemenu = document.getElementById("menu");

  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-300px";
  }

 let more = document.querySelectorAll('.more');
 for (let i=0; i<more.length; i++){
  more[i].addEventListener('click', function(){
    more[i].parentNode.classList.toggle('active')
  })
 } 
 /* Contact section */

 const scriptURL =
 "https://script.google.com/macros/s/AKfycbyXc3Nuf5x4A7wyo0mteqKMbjLc0Zy8X37g4aDQAF0G_rJdBf1XvapMgM8L3l5B0qY/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
 e.preventDefault();
 fetch(scriptURL, { method: "POST", body: new FormData(form) })
   .then((response) => {
     msg.innerHTML = "Message sent succesfully";
     setTimeout(function () {
       msg.innerHTML = ""
     },5000)
     form.reset()
   })
   .catch((error) => console.error("Error!", error.message));
});