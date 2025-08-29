const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1.Qual flor escolheria para um presente clássico e elegante?",
        alternativas: [
            {
                texto: "Rosas vermelhas, pela sua tradição e pelo significado universal de paixão..",
                afirmacao: "O perfil de quem escolhe rosas é focado na tradição, valorizando o que é atemporal e universalmente reconhecido para expressar sentimentos."
            },
            {
                texto:  "Uma orquídea branca, pela sua sofisticação e beleza exótica.",
                afirmacao: "O perfil de quem escolhe orquídeas é focado na originalidade, buscando o que é distinto e sofisticado para transmitir uma mensagem especial."
            }    
           
        ]
    },
    {
       
            enunciado: "Em qual flor você investiria para decorar sua casa a longo prazo?",
            alternativas: [
                {
                    texto: "Rosas em vasos, renovando o buquê para manter a vitalidade e o aroma.",
                    afirmacao: "O perfil de quem escolhe rosas para decoração gosta da renovação e da sensação imediata que as flores trazem, priorizando o frescor e o aroma."
                },
                {
                    texto:  "Uma orquídea em vaso, cuidando para que ela floresça novamente. ",
                    afirmacao: "O perfil de quem escolhe orquídeas valoriza a durabilidade e o cuidado a longo prazo, apreciando a beleza que se mantém ao longo do tempo."
                }    
               
            ]
        },
        {
            enunciado: "Qual flor você usaria para expressar sentimentos complexos?",

            alternativas: [
                {
                    texto: " Rosas de cores diferentes para expressar diferentes sentimentos, como amizade (amarelas) ou admiração (rosas).",
                    afirmacao: "O perfil de quem escolhe rosas expressa-se com clareza, usando símbolos já estabelecidos para comunicar seus sentimentos de forma direta."
                },
                {
                    texto:    "Uma orquídea rara e única, para representar uma conexão especial e profunda.",
               
                    afirmacao: "O perfil de quem escolhe orquídeas expressa-se com sutileza, buscando um gesto único para transmitir a profundidade de seus sentimentos."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();