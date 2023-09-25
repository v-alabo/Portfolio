window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("loader-hidden");

  document.querySelector(".loader").addEventListener("transitionend", () =>{
      document.body.removeChild(document.querySelector(".loader"))
  })
})


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
