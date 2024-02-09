const selecionar = document.querySelector('.btn-plataforma')
const conteudo = document.querySelector('.btn-plataforma .plataformas')

selecionar.addEventListener("click", () => {
    conteudo.classList.toggle('ativo')
   // const botaoaberto = conteudo.classList.contains('ativo')
    //if(botaoaberto == true){
    //  conteudo.classList.remove('ativo')  
   // }else {
    //        conteudo.classList.add('ativo')
   // }

   //obs: esses 2 metodos funciona,sendo que, o toggle alterna
   // entre: add e remove, ficando menor o código
})