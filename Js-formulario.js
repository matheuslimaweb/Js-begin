
function validacao() {
  if(document.form.nome.value=="") {
      alert("Por favor,preencha o campo Nome.");
      document.form.nome.focus();
      return false;
  }

  if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1) {
    alert("Por favor, digite seu endereço de e-mail válido.");
    document.form.email.focus();
    return false;

  }

  if (document.form.senha.value.length < 8) {
    alert("A senha deve conter no mínimo 8 caracteres.");
    document.form.senha.focus();
    return false;
  }
}
