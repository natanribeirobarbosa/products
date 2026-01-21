const botoes = document.querySelectorAll(".options button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove("checked"));
        botao.classList.add("checked");

        

    });
});