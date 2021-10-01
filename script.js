function adicionarBanda() {
  var bandaFavoritaPoster = document.getElementById("banda").value;
  var nome = document.getElementById("nome").value;
  var nomeBanda = "<h1>" + nome + "<h1>";

  if (
    !bandaFavoritaPoster.endsWith(".jpg") &&
    !bandaFavoritaPoster.endsWith(".png")
  ) {
    console.error("Imagem inválida");
    return false;
  }

  var bandaNova = "<img src=" + bandaFavoritaPoster + ">";
  var elementoListaBandas = document.getElementById("listaBandas");

  elementoListaBandas.innerHTML += "<div>" + bandaNova + nomeBanda + "</div>";

  return true;
}