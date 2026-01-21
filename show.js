import {
  doc,
  onSnapshot,
  getDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

import { db } from "./firebase.js"


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
}

function carregarTodosProdutos() {
    const lista = document.getElementById("products")

  onSnapshot(collection(db, "roupas"), snapshot => {
    lista.innerHTML = ""
    let html = '';

    snapshot.forEach(doc => {
      const p = doc.data(); // ✅ FALTAVA ISSO
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
     
    })
  })
}
carregarProdutos("vitrine")
window.carregarProdutos = carregarProdutos
window.carregarTodosProdutos = carregarTodosProdutos





