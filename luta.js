function luta(vidaDoGuerreiro, danoDoGuerreiro) {
  let vidaDoMonstro = 800;
  let novohp = vidaDoGuerreiro;

  while (vidaDoGuerreiro > 0 && vidaDoMonstro > 0) {
    alert("Sua vez: ");
    let ataque = prompt(
      "Escolha entre ataque normal, combo ou ataque especial (1,2,3)"
    );
    let dado = Math.random() * 6 + 1;
    let numero = parseInt(dado);
    alert("Você jogou dado. O número é: " + numero);

    if (ataque == "1") {
      vidaDoMonstro -= danoDoGuerreiro;
      alert(
        "Você deferiu um ataque simples com sucesso.Vida do monstro: " +
          vidaDoMonstro
      );
    }

    if (ataque == "2") {
      var chance = Math.random();
      if (dado > 2) {
        let nv = vidaDoMonstro - danoDoGuerreiro * 1.5;
        let nd = danoDoGuerreiro * 1.5;

        alert(
          "Você deferiu um ataque combo com sucesso! O Monstro sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidaDoMonstro = nv;
      } else {
        alert(
          "Você deferiu um ataque no monstro mas errou. O monstro não sofreu dano! " +
            vidaDoMonstro
        );
      }
    }

    if (ataque == "3") {
      var chance = Math.random();
      if (dado > 3) {
        let nv = vidaDoMonstro - danoDoGuerreiro * 2;
        let nd = danoDoGuerreiro * 2;

        alert(
          "Você deferiu um ataque especial com sucesso! O Monstro sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidaDoMonstro = nv;
      } else {
        alert(
          "Você deferiu um ataque no monstro mas errou. O monstro não sofreu dano! " +
            vidaDoMonstro
        );
      }
    }

    alert("Vez do monstro: ");
    var chance = Math.random() < 0.5;
    if (chance >= 0.5) {
      vidaDoGuerreiro -= 60;
      alert(
        "O monstro ataca o guerreiro. Vida do guerreiro: " + vidaDoGuerreiro
      );
    } else {
      alert(
        "O monstro atacou mas falhou! Você continua com vida " +
          vidaDoGuerreiro +
          " de HP"
      );
    }
  }

  if (vidaDoGuerreiro <= 0) {
    alert("Perdeu a batalha. Sua jornada chegou ao fim tente outra vez ");
  } else {
    alert(
      "Parabens você venceu a batalha contra os esqueletos, a equipe comemora grande feito, Recompensa: +30 de dano e 200 de hp"
    );
  }
  novohp = novohp + 200;
  let novodano = danoDoGuerreiro + 30;

  if (vidaDoGuerreiro >= 0) {
    alert("Sua vida atual é " + novohp + " Seu dano atual é " + novodano);
  }
  let oper = prompt(
    "Agora você tera que decidir qual porta irá:(A B ou C)/Porta Ouro, Porta de ferro, Porta casa dos pais "
  );
  if (oper == "A") {
    alert(
      "Você escolhe a Porta de Ouro. Atrás dela você encontra muito ouro, cristais etc... Você começa a imaginar toda a glória e poder que poderá obter com este tesouro praticamente infinito. Assim que você toca a primeira moeda a seu alcance uma voz grave e ecoante chama seu nome... Então voce prefere assim ? Acha que seria fácil ? Rei dos monstro, surge com uma aura de poder nunca vista..."
    );
    boss(novohp, novodano);
  } else if (oper == "B") {
    alert(
      "Você escolhe a Porta de Ferro, após atravessa-la tudo a sua volta desaparece, o infinito é seu novo horizonte... alguns minutos se passam até que você consegue escutar alguém chamando por seu nome... Finalmente você conseguiu chegar até minha morada... Seus passos até aqui nao foram fáceis, não espere nenhum tipo de alívio agora..."
    );
    boss(novohp, novodano);
  } else {
    alert(
      "Você escolhe a Porta da casa dos seus Pais. Ao atravessa-la você se sente quente e cada vez mais pesado, estranhamente isso não o incomoda..."
    );
  }
}
