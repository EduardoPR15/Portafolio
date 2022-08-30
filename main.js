const btnNav = document.querySelector(".barra");
const lista = document.querySelector(".lista")
btnNav.addEventListener("click", function(){
    lista.classList.toggle("listaShow");
    console.log(lista);
})

console.log(lista);