/*
OBJETIVO - quando clicarmos na aba, temos que mostrar o 
conteúdo da aba que foi clicada pelo usuário e esconder
o conteúdo da aba anterior.

    PASSO 1 - pegar os elementos que representam as abas no HTML
    PASSO 2 - identificar o clique no elemento da aba
    PASSO 3 - ao clicar, desmarcar a aba selecionada
    PASSO 4 - marcas a aba clicada como selecionada
    PASSO 5 - esconder o conteúdo anterior
    PASSO 6 - mostrar o conteúdo da aba selecionada
*/

//PASSO 1
const abas = document.querySelectorAll(".aba");

//PASSO 2
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        //evitar que códigos desnecessários rodem
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});


function selecionarAba(aba) {
    //PASSO3
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //PASSO 4
    aba.classList.add("selecionado");

}


function mostrarInformacoesDaAba (aba) {
    //PASSO 5
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // //PASSO 6
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}