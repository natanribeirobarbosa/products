fetch("data.json")
  .then(response => response.json())
  .then(dados => {
    document.getElementById("nome").innerText = dados.nome
  
  })