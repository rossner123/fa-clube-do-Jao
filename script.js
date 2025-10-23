const lerMais = document.querySelector('.ler-mais');
const bio = document.querySelector('.bio-text');

const frases = document.querySelectorAll(".frase");
const anterior = document.querySelector(".anterior");
const proxima = document.querySelector(".proxima");

const btnComprar = document.querySelector("#btnComprar")
const modal = document.querySelector("#myModal");
const close = document.querySelector("#closeBtn");

lerMais.addEventListener('click', () => {
  bio.classList.toggle('expanded');
  lerMais.textContent = bio.classList.contains('expanded') ? 'Ler menos' : 'Ler mais';
});

let index = 0;

function mostrarFrase(index) {
  frases.forEach(f => f.classList.remove("ativa"));
  frases[index].classList.add("ativa");
}

proxima.addEventListener("click", () => {
  index = (index + 1) % frases.length;
  mostrarFrase(index);
});

anterior.addEventListener("click", () => {
  index = (index - 1 + frases.length) % frases.length;
  mostrarFrase(index);
});


 btnComprar.onclick = () => {
   modal.style.display = "flex";
 };

 close.onclick = () => {
   modal.style.display = "none";
 };

 window.onclick = (e) => {
   if (e.target === modal) modal.style.display = "none";
 };

const perguntas = [
  {
    texto: "Você já prometeu 'amanhã eu começo' e nunca começou?",
    opcoes: [
      { texto: "Nunca", valor: 1 },
      { texto: "Algumas vezes", valor: 2 },
      { texto: "Sempre", valor: 3 }
    ]
  },
  {
    texto: "Qual é o seu nível de preguiça?",
    opcoes: [
      { texto: "Levanto da cama sorrindo", valor: 1 },
      { texto: "Penso duas vezes antes de levantar", valor: 2 },
      { texto: "Já considero ficar ali pra sempre", valor: 3 }
    ]
  },
  {
    texto: "Quando alguém te chama pra sair, você...",
    opcoes: [
      { texto: "Topa na hora!", valor: 1 },
      { texto: "Diz 'talvez' (mas nunca vai)", valor: 2 },
      { texto: "Some do mapa", valor: 3 }
    ]
  },
  {
    texto: "Qual sua relação com os estudos?",
    opcoes: [
      { texto: "Foco total", valor: 0 },
      { texto: "Só antes da prova", valor: 2 },
      { texto: "Deus me livre, mas quem me dera", valor: 3 }
    ]
  },
  {
    texto: "O que você considera um dia produtivo?",
    opcoes: [
      { texto: "Fazer tudo da lista", valor: 0 },
      { texto: "Fazer metade e se orgulhar", valor: 2 },
      { texto: "Ter respirado", valor: 3 }
    ]
  },
  {
    texto: "Se alguém fala ‘bora estudar’, o que você faz?",
    opcoes: [
      { texto: "Abro o livro imediatamente", valor: 0 },
      { texto: "Penso em começar depois", valor: 2 },
      { texto: "Fecho os olhos e espero passar", valor: 3 }
    ]
  },
  {
    texto: "Qual seu humor ao acordar?",
    opcoes: [
      { texto: "Animado e pronto pro mundo", valor: 0 },
      { texto: "Meio sonolento mas sobrevivo", valor: 2 },
      { texto: "Não fale comigo antes do café", valor: 3 }
    ]
  },
  {
    texto: "O que você faz quando precisa de uma ideia brilhante?",
    opcoes: [
      { texto: "Anoto e executo", valor: 0 },
      { texto: "Penso, procrastino e depois faço", valor: 2 },
      { texto: "Espero que caia do céu", valor: 3 }
    ]
  },
  {
    texto: "Como você lida com desafios?",
    opcoes: [
      { texto: "Encaro com coragem", valor: 1 },
      { texto: "Analiso bastante antes de agir", valor: 2 },
      { texto: "Fujo e finjo que não existiu", valor: 3 }
    ]
  },
  {
    texto: "Se alguém fala ‘você é igual o João’, você...",
    opcoes: [
      { texto: "Sinto orgulho", valor: 1 },
      { texto: "Rio e me sinto meio honrado", valor: 2 },
      { texto: "Assumo que sou a versão avançada", valor: 3 }
    ]
  },
  {
    texto: "Você gosta de jogos?",
    opcoes: [
      { texto: "Sou gamer hardcore", valor: 1 },
      { texto: "Jogo às vezes por diversão", valor: 2 },
      { texto: "Não consigo largar o sofá", valor: 3 }
    ]
  },
  {
    texto: "Você costuma criar memes?",
    opcoes: [
      { texto: "Sempre que posso", valor: 1 },
      { texto: "Só quando surge uma ideia boa", valor: 2 },
      { texto: "Minha vida é meme sem eu perceber", valor: 3 }
    ]
  },
  {
    texto: "Se alguém tenta te convencer a trabalhar mais, você...",
    opcoes: [
      { texto: "Aceito o conselho", valor: 1 },
      { texto: "Ouço e ignoro", valor: 2 },
      { texto: "Falo que já sou ocupado demais", valor: 3 }
    ]
  },
  {
    texto: "Qual é seu estilo de liderança?",
    opcoes: [
      { texto: "Organizado e exemplar", valor: 1 },
      { texto: "Improviso e funciona", valor: 2 },
      { texto: "Caos total, mas divertido", valor: 3 }
    ]
  },
  {
    texto: "O que é mais importante na vida?",
    opcoes: [
      { texto: "Trabalho duro e disciplina", valor: 1 },
      { texto: "Equilíbrio entre diversão e dever", valor: 2 },
      { texto: "Rir, zoar e sobreviver", valor: 3 }
    ]
  }
];

let indice = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const pergunta = perguntas[indice];
  
  document.getElementById("pergunta").innerHTML = `<p>${pergunta.texto}</p>`;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  const progress = document.querySelector(".progress");
  progress.style.width = `${((indice) / perguntas.length) * 100}%`;

  pergunta.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao.texto;
    btn.classList.add("opcao-btn");
    btn.onclick = () => {
      pontuacao += opcao.valor;
      indice++;
      if (indice < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    };
    opcoesDiv.appendChild(btn);
  });
}

function mostrarResultado() {
  const quizContainer = document.getElementById("quiz-container");
  const perguntaDiv = document.getElementById("pergunta");
  const opcoesDiv = document.getElementById("opcoes");

  perguntaDiv.innerHTML = "";
  opcoesDiv.innerHTML = "";

  const progress = document.querySelector(".progress");
  progress.style.width = "100%";

  let percentual = Math.round((pontuacao / (perguntas.length * 3)) * 100);

  let frase = "";
  if (percentual <= 25) {
    frase = "Um ser humano funcional, ainda tem muito pra aprender.";
  } else if (percentual <= 50) {
    frase = "Meio normal ainda. Um clone em treinamento.";
  } else if (percentual <= 75) {
    frase = "Já domina o espírito da vagabundagem.";
  } else if (percentual < 100) {
    frase = "Você tem talento! Tá quase lá.";
  } else {
    frase = "Eai João! Como vai?";
  }

  perguntaDiv.innerHTML = `<div class="percent">Você é <span class="span-percentual">${percentual}%</span> João</div>
                           <div class="texto-resultado">${frase}</div>`;

                           document.querySelector('.cabeça-jao2').style.display = "inline"
}



mostrarPergunta();