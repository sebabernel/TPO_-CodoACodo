function showMenu(){
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

function mostrarPopUp() {
    // Mostrar el pop-up
    document.getElementById("pop-up").style.display = "block";
  
    // Evitar que se envíe el formulario de inmediato
    return false;
  }
