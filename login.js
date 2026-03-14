
document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let correo = document.getElementById("correo").value;
let password = document.getElementById("password").value;

if(correo === "dilan.gonzalez-v@uniminuto.edu.co" && password === "1234"){

window.location.href = "panel_profesor.html";

}else{

alert("Credenciales incorrectas");

}

});

