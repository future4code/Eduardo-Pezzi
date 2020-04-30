
 console.log("Bem vindo ao Casino LaBenu, Você escolheu BlackJack, BOA SORTE!");

 if (confirm("Deseja iniciar seu jogo?")) {
    let cartajogador = comprarCarta();
    let cartaoponente = comprarCarta();

    //testando mão jogador e oponente.
    alert(cartajogador);
    alert(cartaoponente);
 }

