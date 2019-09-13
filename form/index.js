const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");
/* Adcionando uma lista de evento chamado de click*/
/* Que gera uma função.. */
btnLogin.addEventListener("click", event => {
  /* Eliminando o evento padrão, que no caso seria o botão dá submit ao clicar*/
  event.preventDefault();
/* Validando formulário*/
  const fields = [...document.querySelectorAll(".input-block input")]

  fields.forEach(field => {
   if (field.value === "") form.classList.add("validate-error");

    });

  const formError = document.querySelector(".validate-error");
  if (formError) {
      formError.addEventListener("animationend", event => {
        if(event.animationName === "nono"){
            formError.classList.remove("validate-error");
        }
      });
  } else {
        /* Adicionando ao form uma nova classe*/ 
        form.classList.add("form-hide"); 
  }

});
/* Adicionando um evento, no caso o evento de animationstart,
para que quando inicar a animação (down), o body tenha overflow = hidden*/ 
form.addEventListener("animationstart", event => {
 event.animationName === "down" ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = " ";

});

/*Adicionando um evento, no caso o evento de animationend, 
para que quando finalizar a animação (down) o display no form seja none.*/ 
form.addEventListener("animationend", event => {
    event.animationName === "down" ? form.style.display = "none" : form.style.display = " "; 

});

