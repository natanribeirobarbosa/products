const botoes = document.querySelectorAll(".options button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        document.getElementById("products").innerHTML= `<p>Carregando...</p>`
        botoes.forEach(b => b.classList.remove("checked"));
        botao.classList.add("checked");



    });
});


document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("fav-btn")) return;

  const btn = e.target;

  const produto = {
    name: btn.dataset.name,
    image: btn.dataset.image,
    link: btn.dataset.link,
    price: btn.dataset.price
  };

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // evita duplicados
  const existe = favoritos.some(p => p.link === produto.link);
  if (existe) return alert("Produto já favoritado ❤️");

  favoritos.push(produto);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  alert("Salvo nos favoritos ❤️");
});


const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
console.log(favoritos);