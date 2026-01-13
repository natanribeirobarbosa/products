import { db } from "./firebase.js"
import {
  collection,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"


function carregarUsuarios() {
  const lista = document.getElementById("products")

  onSnapshot(collection(db, "roupas"), snapshot => {
    var content = ``


    snapshot.forEach(doc => {
     content +=`<div class="product">
    <img src="${doc.data().linkF}" height="160px" alt="">
    <div>
    <span class="price"></span>
    <span class="">${doc.data().nome}</span>
    <button class="buy" onclick="window.location.href='${doc.data().linkF}'"></button>
    </div>
</div>`;


    })

    lista.innerHTML = content
  })
}

carregarUsuarios()
