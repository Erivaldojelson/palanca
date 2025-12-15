// Capturando elementos
const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const forgotLink = document.getElementById("forgotPasswordLink");

// Evento de login
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if(email === "admin@palanca.com" && password === "123456") {
        message.innerText = "Login realizado com sucesso!";
        setTimeout(() => { window.location.href = "/dashboard"; }, 1000);
    } else {
        message.innerText = "Usuário ou senha incorretos.";
    }
});

// Evento de "Esqueci minha senha"
forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    const email = prompt("Digite seu email para recuperar a senha:");
    if(email) {
        alert(`Se o email ${email} estiver cadastrado, você receberá instruções para redefinir sua senha.`);
    }
});

