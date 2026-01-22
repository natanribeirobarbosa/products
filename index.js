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
  if (existe){
    return;
    }

  favoritos.push(produto);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
    document.getElementById("message").innerText= "Favorito salvo com sucesso!"
  atualizarContador()
});




function renderFavoritos() {
  const productsDiv = document.getElementById("products");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  productsDiv.innerHTML = "";

  if (favoritos.length === 0) {
    productsDiv.innerHTML = "<p>Nenhum produto</p>";
    atualizarContador();
    return;
  }

  favoritos.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <div class="image" style="background-image: url('${p.image}')"></div>
      <div>
        <span class="name">${p.name}</span>
        <span class="price">${p.price}</span>
        <div>
          <button onclick="window.open('${p.link}', '_blank')">
            Acessar link🔗
          </button>
          <button class="remove-fav" data-index="${index}">
            ❌ Remover
          </button>
        </div>
      </div>
    `;

    productsDiv.appendChild(card);
  });

  atualizarContador();
}

document.getElementById("btnFav").addEventListener("click", renderFavoritos);



document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("remove-fav")) return;

  const index = e.target.dataset.index;
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  favoritos.splice(index, 1);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  renderFavoritos(); // re-renderiza
});



function atualizarContador() {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  document.getElementById("favNumber").innerText = `(${favoritos.length})`;

setTimeout(() => {
    document.getElementById("message").innerText= ""
}, 3000);
}

atualizarContador();





