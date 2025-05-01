document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  // Enviar mensagem quando o botão "Enviar" for clicado
  sendBtn.addEventListener("click", function () {
    enviarMensagem();
  });

  // Enviar mensagem ao pressionar a tecla Enter
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();  // Impede o comportamento padrão (como pular linha)
      enviarMensagem();
    }
  });

  function enviarMensagem() {
    const message = userInput.value.trim(); // Pega o texto digitado

    if (message !== "") {
      mostrarMensagem("Você", message); // Mostra a mensagem do usuário
      responderBot(message);            // Responde com base na pergunta
      userInput.value = "";             // Limpa o campo de texto
    }
  }

  boasVindas();

  function boasVindas() {
    const hora = new Date().getHours();
    let saudacao = "";

    if (hora < 12) {
      saudacao = "Bom dia, furioso(a)! ☀️ Já treinou sua mira hoje?\n";
    } else if (hora < 18) {
      saudacao = "Boa tarde, furioso(a)! 🎯 Preparado pra mais um clutch da FURIA?\n";
    } else {
      saudacao = "Boa noite, furioso(a)! 🌙 A FURIA nunca dorme no ponto!\n";
    }

    const extras = [
      "\nVamos trocar uma ideia sobre o time? 🐾",
      "\nFica à vontade pra perguntar o que quiser sobre o time.🔥",
      "\nChama no chat que eu tô ligado no cenário!🎮"
    ];

    const index = Math.floor(Math.random() * extras.length);
    const mensagemFinal = (saudacao + " " + extras[index]).replace(/\n/g,"<br>");

    mostrarMensagem("FURIA", mensagemFinal);
  }

  function mostrarMensagem(remetente, texto) {
    const msg = document.createElement("p");

    // Verifica se a mensagem é do usuário ou do bot
    if (remetente === "Você") {
      msg.classList.add("user-message");
    } else {
      msg.classList.add("bot-message");
    }

    msg.innerHTML = `<strong>${remetente}:</strong> ${texto}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function responderBot(pergunta) {
    let resposta = "";

    // Convertendo para minúsculas para facilitar comparação
    const perguntaFormatada = pergunta.toLowerCase();

    if (perguntaFormatada.includes("próximo jogo")) {
      resposta = "O próximo jogo da FURIA é no dia 04/05 contra a MIBR.";
    } else if (perguntaFormatada.includes("horário da próxima partida")) {
      resposta = "Ainda não há informações sobre as próximas partidas :(";
    } else if (perguntaFormatada.includes("história")) {
      resposta = "A FURIA é uma organização de e-sports brasileira, fundada em 2017 pelo empresário Jaime Pádua, juntamente com os empresários André Akkari  (jogador de pôquer profissional) e Cris Guedes em Uberlândia - MG. A empresa é famosa pelo seu time de CS:GO!";
    } else if (perguntaFormatada.includes("jogadores")) {
      resposta = "No CS2, os jogadores principais são FalleN, KSCERATO, yuurih, arT e skullz. Já no Valorant, os principais nomes são khalil, havoc, heat, raafa e pryze.";
    } else if (
      perguntaFormatada.includes("sou fã") ||
      perguntaFormatada.includes("amo a furia") ||
      perguntaFormatada.includes("furia é demais")
    ) {
      resposta = "Fico muito feliz em ouvir isso, furioso(a)! 🖤💛 A FURIA te ama!";
    } else {
      resposta = "Desculpe, não entendi. Tente outra pergunta!";
    }

    mostrarMensagem("FURIA", resposta);
  }
});
