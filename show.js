import { db } from "./firebase.js"
import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"


function carregarUsuarios() {
  const lista = document.getElementById("products")

  onSnapshot(collection(db, "roupas"), snapshot => {
    lista.innerHTML = ""

    snapshot.forEach(doc => {
      const li = document.createElement("p")
      li.textContent = doc.data().nome
      lista.appendChild(li)
    })
  })
}

carregarUsuarios()
