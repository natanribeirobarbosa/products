import {
  doc,
  onSnapshot,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

import { db } from "./firebase.js"


function carregarUsuarios() {
  const lista = document.getElementById("products")

  const roupaRef = doc(db, "config", "vitrine")

  onSnapshot(roupaRef, async (docSnap) => {
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
            <span>${p.nome}</span>
            <button onclick="window.location.href='${p.link}'">
              Acessar link
            </button>
            </div>
          </div>
        `
      }
    }

    lista.innerHTML = html
  })
}


carregarUsuarios()


