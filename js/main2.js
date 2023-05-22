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
   