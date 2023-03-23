/*
let animado = document.querySelector(".textos");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - - < scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);*/

/*let animado = document.querySelectorAll(".textos");

function mostrarScroll(){
let scrollTop = document.documentElement.scrollTop;

let alturaAnimado = animado.offsetTop;

if (alturaAnimado == scrollTop){
    animado.style.opacity = 1;
}

}*/
/*
window.addEventListener("DOMContentLoaded" , () => {
    var element = document.getElementById(".textos");
    document.addEventListener("scroll", () => {
    element.setAttribute("style","background-color: rgba(255,255,255,10)");
    });
});*/
/*(window).scroll(function() {
    var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();

    if(scrollTop >= 700){
      document.getElementById('texto').style.backgroundColor='#C20000';
    }

   if(scrollTop < 700){
      document.getElementById('texto').style.backgroundColor='#000000';
    }

  });

prompt("mostramos los datos de java script");
console.log("muestra datos");*/

window.onscroll = function (e) {
    var element = document.getElementById("contenedor-nav");
    element.classList.add("change");
  }
  div.contenedor-nav {
    background-color: yellow;
    position :fixed;
  }
  .nav1{
    overflow-y :scroll;
    height : 1000px;
  }

  .change {
    background-color : red !important;
  }