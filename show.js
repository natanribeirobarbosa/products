import { db } from "./firebase.js"
import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"


function carregarUsuarios() {
  const lista = document.getElementById("products")

  const roupaRef = doc(db, "roupas", "lBi3lHOQHCQJvbtytYzx")

  onSnapshot(roupaRef, (docSnap) => {
    if (!docSnap.exists()) return

    const dados = docSnap.data()
    const itens = dados.nomes // 👈 campo array do Firestore

    let content = ""

    itens.forEach(item => {
      content += `
        <div class="product">
          <img src="${item.linkF}" height="160px" alt="">
          <div>
            <span class="">${item.nome}</span>
            <button class="buy" onclick="window.location.href='${item.link}'">
              Acessar link
            </button>
          </div>
        </div>
      `
    })

    lista.innerHTML = content
  })
}


carregarUsuarios()
