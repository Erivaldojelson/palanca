window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.animated-img');
    const scrollPosition = window.scrollY;
    images.forEach(img => {
        const moveY = Math.min(scrollPosition * 0.1, 100); // Máximo de 100px
        img.style.transform = `translateY(${moveY}px)`;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura um elemento que contenha "Clique aqui"
    const elementos = document.querySelectorAll("*");

    elementos.forEach(elemento => {
        if (elemento.innerText.includes("Clique aqui")) {
            elemento.style.cursor = "pointer"; // Muda o cursor para indicar que é clicável
            
            elemento.addEventListener("click", function() {
                location.reload(); // Recarrega a página ao clicar
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll(".grid-imagens img");

    // Efeito de zoom ao passar o mouse
    imagens.forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
            this.style.opacity = "0.8";
        });

        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = "1";
        });

        // Ao clicar, abre a imagem em tela cheia
        img.addEventListener("click", function () {
            abrirImagem(this.src);
        });
    });
});

// Função para abrir a imagem em tela cheia
function abrirImagem(src) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";
    modal.style.cursor = "pointer";

    const imagem = document.createElement("img");
    imagem.src = src;
    imagem.style.maxWidth = "80%";
    imagem.style.maxHeight = "80%";
    imagem.style.borderRadius = "10px";
    imagem.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.2)";

    modal.appendChild(imagem);
    document.body.appendChild(modal);

    // Fechar ao clicar na tela
    modal.addEventListener("click", function () {
        document.body.removeChild(modal);
    });
}

