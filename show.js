import {
  doc,
  onSnapshot,
  getDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

import { db } from "./firebase.js"


function carregarProdutos(colecao) {
  const lista = document.getElementById("products")

  onSnapshot(collection(db, colecao), snapshot => {
    lista.innerHTML = ""
    let html = '';

    snapshot.forEach(doc => {
      const p = doc.data(); // ✅ FALTAVA ISSO
      html += `
       <div class="product">

      <div class="image-slider" data-images='${JSON.stringify(p.linkF)}'>
      <img src="${p.linkF[0]}" class="slide-img"></div>
      <div>
        <span class="store">${p.store}</span>
        <span class="name">${p.nome}</span>
        <span class="price">${p.price}</span>
        <div>
          <button class="fav-btn" data-name="${p.nome}" data-image="${p.linkF}" data-link="${p.link}"
            data-price="${p.price}">
            🖤
          </button>

          <button onclick="window.open('${p.link}', '_blank')">
            Acessar link🔗
          </button>
          
        </div>
      </div>
    </div>
        `

    })
    lista.innerHTML = html;
      document.querySelectorAll(".image-slider").forEach(slider => {
      const images = JSON.parse(slider.dataset.images);
      const imgElement = slider.querySelector(".slide-img");

      let index = 0;

      setInterval(() => {
      index = (index + 1) % images.length;
      imgElement.src = images[index];
      }, 2000); // troca a cada 2 segundos
      });
  })

  carregarSorteios()
}



function carregarSorteios() {
  const lista = document.getElementById("sort");

  onSnapshot(collection(db, "sorteio"), async (snapshot) => {
    let html = "";

    for (const docSnap of snapshot.docs) {
      const { a1, a2 } = docSnap.data();

      const refs = [a1, a2].filter(Boolean);

      for (const ref of refs) {
        const produtoSnap = await getDoc(ref);
        if (!produtoSnap.exists()) continue;

        const p = produtoSnap.data();

        html += `
          <div class="product">
            <div class="image" style="background-image: url('${p.linkF}')"></div>
            <div>
              
              <span class="name">${p.nome}</span>
              

           
            </div>
          </div>
        `;
      }
    }

    lista.innerHTML = html;
  });
}



carregarProdutos("vitrine")
window.carregarSorteios = carregarSorteios
window.carregarProdutos = carregarProdutos
window.carregarTodosProdutos = carregarTodosProdutos





