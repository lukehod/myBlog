/*
 *    startPage() -
 *      helper function that calls other setup functions to run
 *      after load screen fades away
 */
function startPage(){
  $("#loadScreen").fadeOut("slow"); // fade away load screen
  vantaConfig();                    // vanta.js start
  typedConfig();                    // typed.js start
}

/*
 *    listener for page load
 */
window.addEventListener('DOMContentLoaded', startPage);

/*
 *    Navigation Scripts
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*
 *    Script to add year to copyright
 */
var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

/*
 *    Vanta.js background animation
 */
function vantaConfig(){
  if (document.getElementById("mainbg")) { // check if page is using Vanta
    VANTA.DOTS({
      el: "#mainbg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      showLines: false
    })
  }
}

/*
 *    Type.js configuration
 */
function typedConfig() {
  if (document.getElementById("typed")) { // check if page is using Type.js
    var options = {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 30,
      cursorChar: '_'
    };

    var typed = new Typed('#typed', options);
  }
}
