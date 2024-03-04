function iniciarsesion() {
    var email = document.getElementById("aquivaelmail").value;
    var password = document.getElementById("aquivalacontrasena").value;
    if (email === "luis@gmail.com" && password === "luis123") {
        window.location.href = "welcome.html";
    }else {
        alert ("Las credenciales son incorrectas, intentalo de nuevo por favor") ;
    }
}