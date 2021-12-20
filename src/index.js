import controlerUserLogin from "./moduloInterface.js";
//Trazendo elementos do bootstrap usando js
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//Trazendo os botões da DOM no HTML
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=>{
    let user = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    //Testando se os campos não estão vazios.
    if(!user || user===null || user==="" || !senha || senha===null || senha===""){
        alert("Campos vazios, não há como executar login.")
        myModal.show();
    }else{
        controlerUserLogin.loginInfo(user, senha);
    }
});