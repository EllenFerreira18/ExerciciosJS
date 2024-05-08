let username = prompt("Digite seu nome de usuário: ")
let senha = prompt ("Digite sua senha: ")

if(username == "admin" && senha == "senha123") {
    console.log("Login bem sucedido");
} else {
    console.log("Você não tem permissão de acesso!")
}
