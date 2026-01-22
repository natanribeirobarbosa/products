import {
  doc,
  onSnapshot,
  getDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

import { db } from "./firebase.js"

/* 
function carregarProdutos(documento) {
  
  const roupaRef = doc(db, "config", documento)

  onSnapshot(roupaRef, async (docSnap) => {
    const lista = document.getElementById("products")
    if (!docSnap.exists()) return

    const dados = docSnap.data()
    const refs = dados.nomes // 👈 array de DocumentReference

    if (!Array.isArray(refs)) return

    let html = ""

  
    for (const ref of refs) {
      const produtoSnap = await getDoc(ref)

      if (produtoSnap.exists()) {
        const p = produtoSnap.data()

        html += `
          <div class="product">
            <img src="${p.linkF}" height="160">
            <div>
            <span class="store">${p.store}</span>
            <span>${p.nome}</span>
            <span class="price">${p.price}</span>
            <button onclick="window.open('${p.link}', '_blank')">
              Acessar link🔗
            </button>
            </div>
          </div>
        `
      }
    }

    lista.innerHTML = html
  })
} */

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
      <div>
        <span class="store">${p.store}</span>
        <span class="name">${p.nome}</span>
        <span class="price">${p.price}</span>
        <div>
          <button onclick="window.open('${p.link}', '_blank')">
            Acessar link🔗
          </button>
          <button class="fav-btn" data-name="${p.nome}" data-image="${p.linkF}" data-link="${p.link}"
            data-price="${p.price}">
            ❤️
          </button>
        </div>
      </div>
    </div>
        `

    })
    lista.innerHTML = html;
  })
}
carregarProdutos("vitrine")
window.carregarProdutos = carregarProdutos
window.carregarTodosProdutos = carregarTodosProdutos





