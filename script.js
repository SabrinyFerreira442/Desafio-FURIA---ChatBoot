document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");


  sendBtn.addEventListener("click", function () {
    enviarMensagem();
  });

  
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); 
      enviarMensagem();
    }
  });

  function enviarMensagem() {
    const message = userInput.value.trim(); 

    if (message !== "") {
      mostrarMensagem("Você", message); 
      responderBot(message);            
      userInput.value = "";             
    }
  }

  boasVindas();

  function boasVindas() {
    const hora = new Date().getHours();
    let saudacao = "";
    const perguntaFormatada = pergunta.trim().toLowerCase();

    if (hora >= 0 && hora < 6) {
      saudacao = "Olá, furioso(a)! 💭 O que faz acordado(a) na madruga?😴😝\n";
    }else if (hora >= 6 && hora < 12) {
        saudacao = "Bom dia, furioso(a)! ☀️ Já treinou sua mira hoje?\n";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa tarde, furioso(a)! 🎯 Preparado pra mais um clutch da FURIA?\n";
    }else {
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


    const perguntaFormatada = pergunta.toLowerCase();

    if (perguntaFormatada.includes("próximo jogo")) {
      resposta = "O próximo jogo da FURIA é no dia 04/05 contra a MIBR.";
    } else if (perguntaFormatada.includes("oi") || perguntaFormatada.includes("olá")){
      resposta = "Olá, Furioso(a)! Como posso te ajudar? \n";
    }else if (perguntaFormatada.includes("horário da próxima partida")) {
      resposta = "Ainda não há informações sobre as próximas partidas :(";
    } else if (perguntaFormatada.includes("história")) {
      resposta = "A FURIA é uma organização de e-sports brasileira, fundada em 2017 pelo empresário Jaime Pádua, juntamente com os empresários André Akkari  (jogador de pôquer profissional) e Cris Guedes em Uberlândia - MG. A empresa é famosa pelo seu time de CS:GO!";
    } else if (perguntaFormatada.includes("jogadores")) {
      resposta = "No CS2, os jogadores principais são FalleN, KSCERATO, yuurih, arT e skullz. Já no Valorant, os principais nomes são khalil, havoc, heat, raafa e pryze.";
    }else if (perguntaFormatada.includes("contratada")){
      resposta = "Com certeza furiosa! Você já mora aqui ó 👉❤, no nosso coração❣";
    } else if (
      perguntaFormatada.includes("sou fã") ||
      perguntaFormatada.includes("amo a furia") ||
      perguntaFormatada.includes("furia é demais")
    ) {
      resposta = "Fico muito feliz em ouvir isso, furioso(a)! 🖤💛 A FURIA te ama!";
    }else if( 
    perguntaFormatada.includes("obrigada") ||
    perguntaFormatada.includes("valeu") ||
    perguntaFormatada.includes("até logo")
    ){
      resposta = "Tmj fera!👊 Se precisar de algo mais, é só chamar....";
    }
     else {
      resposta = "Desculpe, não entendi. Tente outra pergunta!";
    }

    mostrarMensagem("FURIA", resposta);
  }
});
