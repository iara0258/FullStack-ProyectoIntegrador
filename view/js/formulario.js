//----------------DATOS PERSONALES------------------//

function validarDatos(){
    const usuario=document.getElementById("usuario").value
    const nombre=document.getElementById("nombre").value
    const email=document.getElementById("email").value
    const nacimiento=document.getElementById("nacimiento").value
    const mensaje=document.getElementById("mensaje_login")

    if (usuario==""){
        mensaje.innerHTML="ingrese un usuario valido"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else if (nombre=""){
        mensaje.innerHTML="ingrese su nombre"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else if (email==""){
        mensaje.innerHTML="ingrese un email valido"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else if (nacimiento==""){
        mensaje.innerHTML="ingrese su fecha de nacimiento"
        mensaje.style.color="red"
        mensaje.style.fontSize="12px"
        return false
    }

    else {
        return true
    }
}

