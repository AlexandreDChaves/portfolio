function validar() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");

  if (nome.value == "") {
    alert("Nome não informado");
    nome.focus();
    return;
  }
  if (email.value == "") {
    alert("Email não informado");
    email.focus();
    return
  }
  if (telefone.value == "") {
    alert("Telefone não informado");
    telefone.focus();
    return
  }
}