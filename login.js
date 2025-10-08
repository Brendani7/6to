function ver() {
    document.getElementById("lblconfirmar").style.display = "block";
    document.getElementById("password2").style.display = "block";
}

function ingresar() {
    let usuario = document.getElementById("username").value;
    let contraseña = document.getElementById("password").value;
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contraseña", contraseña);
    alert("Ingresando..." + usuario);
}
