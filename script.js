const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Descubra: Seu perfil católico é mais Tradicional ou Carismático? 1. Como você percebe a ação do Espírito Santo em sua vida?",
        alternativas: [
            {
                texto: "Através dos sacramentos, da liturgia e da fidelidade cotidiana à doutrina da Igreja.",
                afirmacao: "Sua espiritualidade é profundamente enraizada na tradição da Igreja. Você encontra Deus na beleza dos ritos, na solidez da doutrina e na riqueza do silêncio. Sua fé é como uma rocha firme: constante, reverente e fiel."
            },
            {
                texto:  "Através de momentos de oração intensa, escuta profética e dons espirituais visíveis.",
                afirmacao: "Através de momentos de oração intensa, escuta profética e dons espirituais visíveis."
            }    
           
        ]
    },
    {
       
            enunciado: "O que mais te eleva espiritualmente durante Santa missa?",
            alternativas: [
                {
                    texto: "O silêncio reverente, a profundidade das orações e a centralidade da Eucaristia.",
                    afirmacao: "Sua espiritualidade é profundamente enraizada na tradição da Igreja. Você encontra Deus na beleza dos ritos, na solidez da doutrina e na riqueza do silêncio. Sua fé é como uma rocha firme: constante, reverente e fiel."
                },
                {
                    texto:  "Os momentos de louvor, as pregações fervorosas e a participação comunitária ativa. ",
                    afirmacao: "Sua fé é vivida com entusiasmo e abertura à ação do Espírito Santo de forma sensível. A oração em comunidade, os carismas e os momentos de louvor renovam sua vida espiritual com vigor. Sua fé é como um fogo: viva, alegre e contagiante."
                }    
               
            ]
        },
        {
            enunciado: "Quando você sente que está mais próximo de Deus?",

            alternativas: [
                {
                    texto: "Quando me abandono em silêncio diante do Santíssimo, sentindo Sua presença sem palavras, deixando que Ele fale na profundidade da alma.",
                    afirmacao: "Sua espiritualidade é profundamente enraizada na tradição da Igreja. Você encontra Deus na beleza dos ritos, na solidez da doutrina e na riqueza do silêncio. Sua fé é como uma rocha firme: constante, reverente e fiel."
                },
                {
                    texto:    "Quando sou tomado por uma oração viva, espontânea, sentindo o Espírito Santo agir com força interior, me impulsionando a louvar e escutar com o coração aberto.",
               
                    afirmacao: "Quando sou tomado por uma oração viva, espontânea, sentindo o Espírito Santo agir com força interior, me impulsionando a louvar e escutar com o coração aberto."
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