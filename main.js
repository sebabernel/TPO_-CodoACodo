function showMenu(){
    document.querySelector('.navigation').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.close').classList.toggle('show');
}

/*-------------------------------------------VALIDACIÓN DEL FORMULARIO DE SUSCRIPCIÓN---------------------------------------------------------------------------*/

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
  
    if (nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || usuario.trim() === '' || password.trim() === '') {
      alert('Falta completar algún campo');
    } else {
      alert('¡Usted está suscripto!');
      document.getElementById('subscriptionForm').reset();
    }
  });

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

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
      
      alert('¡Reserva exitosa!');
      document.getElementById('reservationForm').reset();
    }
  });
  