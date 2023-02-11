
/* JS Document */
  
function checkNombre(n) { 
  let nombre = document.getElementById('nombre');
  let expreg = new RegExp("^[a-zA-ZÀ-ÿ\\s]{1,40}$");
  let mensaje = document.getElementById('nombre_error');

  if(expreg.test(n)){
    mensaje.style.visibility = 'hidden';
    nombre.className = 'formulario_grupo-correcto';
    boton.disabled = false;
  
  } else {
    mensaje.style.visibility = 'visible';
    nombre.className = 'formulario_grupo-incorrecto';
    boton.disabled = true;
  }
}

function checkEmail(e) { 
  let email = document.getElementById('email');
  let expreg = new RegExp("^[a-z][\\w.-]+@\\w[\\w.-]+\\.[\\w.-]*[a-z][a-z]$");
  let mensaje = document.getElementById('email_error');
  
  if(expreg.test(e)){
    mensaje.style.visibility = 'hidden';
    email.className = 'formulario_grupo-correcto';
    boton.disabled = false;
  
  } else {
    mensaje.style.visibility = 'visible';
    email.className = 'formulario_grupo-incorrecto';
    boton.disabled = true;
  }
}

function checkClave(c){
  let number = c.length;
  let clave = document.getElementById('clave');
  let mensaje = document.getElementById('clave_error');

  if(number>8){
    mensaje.style.visibility = 'visible';
    clave.className = 'formulario_grupo-incorrecto';
    boton.disabled = true;

    } else {
      mensaje.style.visibility = 'hidden';
      clave.className = 'formulario_grupo-correcto';
      boton.disabled = false;
  }
}

function checkClave2(c2){
  let inputClave1 = document.getElementById('clave');
  let clave2 = document.getElementById('clave2');
  let mensaje = document.getElementById('clave2_error');

  if(c2 !== inputClave1.value){
    mensaje.style.visibility = 'visible';
    clave2.className = 'formulario_grupo-incorrecto';
    boton.disabled = true;

    } else {
      mensaje.style.visibility = 'hidden';
      clave2.className = 'formulario_grupo-correcto';
      boton.disabled = false;
  }
}


function validacion(){
  let nombre = document.getElementById('nombre');
  let email = document.getElementById('email');
  let clave = document.getElementById('clave');
  let clave2 = document.getElementById('clave2');

  let nombre_m = document.getElementById("nombre_mensaje");
  let email_m = document.getElementById("email_mensaje");
  let clave_m = document.getElementById("clave_mensaje");
  let clave2_m = document.getElementById("clave2_mensaje");

  if(nombre.value == null || nombre.value.length == 0){
    nombre_m.style.visibility ='visible';
    nombre.className = 'formulario_grupo-incorrecto';
    return false; 

  } else if (email.value == null || email.value.length == 0){
    email_m.style.visibility ='visible';
    email.className = 'formulario_grupo-incorrecto';
    return false; 

  } else if (clave.value == null || clave.value.length == 0){
    clave_m.style.visibility ='visible';
    clave.className = 'formulario_grupo-incorrecto';
    return false; 

  } else if (clave2.value == null || clave2.value.length == 0){
    clave2_m.style.visibility ='visible';
    clave2.className = 'formulario_grupo-incorrecto';
    return false; 

  } else {
    alert('La inscripción ha sido correcta');
    return true;
  }
}


