const botoes = document.querySelectorAll(".options button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        document.getElementById("products").innerHTML= `<p>Carregando...</p>`
        botoes.forEach(b => b.classList.remove("checked"));
        botao.classList.add("checked");



    });
});