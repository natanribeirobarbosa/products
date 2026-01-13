import { db } from "./firebase.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

async function salvarUsuario() {
  await addDoc(collection(db, "roupas"), {
    nome: "Roupa 2",
    valor: 22,
    criadoEm: new Date()
  })

  alert("Salvo com sucesso!")
}

window.salvarUsuario = salvarUsuario