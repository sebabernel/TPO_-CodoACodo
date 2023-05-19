function showMenu(){
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var fecha = document.getElementById('fecha').value;
    var comensales = document.getElementById('comensales').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || fecha.trim() === '' || comensales.trim() === '' || isNaN(comensales)) {
      alert('Por favor, complete todos los campos correctamente.');
    } else {
      // Aquí puedes agregar tu código adicional para el caso de una reserva exitosa
      alert('¡Reserva exitosa!');
    }
  });
  
