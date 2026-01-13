import { db } from "./firebase.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

async function salvarProduto(nome, link, linkF, price) {
  await addDoc(collection(db, "roupas"), {
    nome: nome,
    link: link,
    linkF: linkF,
    price: price,
    criadoEm: new Date()
  })

  alert("Salvo com sucesso!")
}

window.salvarProduto = salvarProduto