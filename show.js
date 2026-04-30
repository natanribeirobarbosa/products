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

      <div class="image" style="background-image: url('${p.linkF}')"></div>
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






