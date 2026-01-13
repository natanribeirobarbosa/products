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
     content +=`<<div class="product">
    <img src="" height="160px" alt="">
    <div>
    <span class="price"></span>
    <span class="">`+doc.data().nome+`</span>
    <button class="buy">Acessar página</button>
    </div>
</div>
>`;
    })
  })
}

carregarUsuarios()
