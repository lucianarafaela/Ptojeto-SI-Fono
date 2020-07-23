/**
 * ACIONAMENTO DO MENU
 * OS TRÊS TRACINHOS
 */

var iconMenu = document.querySelector(".icon-menu");
var menu = document.querySelector(".menu");
var content = document.querySelector(".content");

iconMenu.addEventListener("click", function(){

   menu.classList.toggle('menu--move');
   content.classList.toggle('content__move');
   
});
