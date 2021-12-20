import userLogin from "./moduloDados.js";

class ControlerUserLogin {
    constructor(status) {
        this.status = status;
    }
    checkLogin() {
        this.status = true;
    }
    loginInfo(user, senha) {
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        if(!infoCheck) {
            alert("Logou.")
        } else {
            console.log(infoCheck);
            if(infoCheck.senha === senha) {
                alert("Usuário não existe.");
            } else {
            alert("Senha inválida")
            }
        }
    }
}
    const controlerUserLogin = new ControlerUserLogin();

export default controlerUserLogin;