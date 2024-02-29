function luta(vidaDoGuerreiro, danoDoGuerreiro) {
  let vidaDoMonstro = 2000;
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
      if (chance >= 0.5) {
        let nv = vidaDoMonstro - danoDoGuerreiro * 1.5;
        let nd = danoDoGuerreiro * 1.5;

        alert(
          "Você deferiu um ataque combo com sucesso! O Chefão sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidaDoMonstro = nv;
      } else {
        alert(
          "Você deferiu um ataque no monstro mas errou. O Chefão não sofreu dano! " +
            vidaDoMonstro
        );
      }
    }

    if (ataque == "3") {
      var chance = Math.random();
      if (chance >= 0.5) {
        let nv = vidaDoMonstro - danoDoGuerreiro * 2;
        let nd = danoDoGuerreiro * 2;

        alert(
          "Você deferiu um ataque especial com sucesso! O Chefão sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidaDoMonstro = nv;
      } else {
        alert(
          "Você deferiu um ataque no monstro mas errou. O Chefão não sofreu dano! " +
            vidaDoMonstro
        );
      }
    }

    alert("Vez do monstro: ");
    var chance = Math.random() < 0.7;
    if (chance >= 0.7) {
      vidaDoGuerreiro -= 100;
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
    var azar = Math.random() < 0.7;
    if (azar >= 0.7) {
      alert(
        "Parabens você venceu a batalha contra os esqueletos, a equipe comemora grande feito, Recompensa: +30 de dano e 200 de hp"
      );
    } else {
      if (vidaDoGuerreiro > 0) {
        let vida = vidaDoGuerreiro - 200;
        alert(
          "Você fica cansado e esta vendo um clarão quando atropeça e bate sua cabeça voce perdeu 200 de hp. Seu novo hp é: " +
            vida
        );
      } else {
        alert(
          "Voce fica cansado e avista um clarão caminhando em sua direção, você encontra a saida da caverna e devagar esta voltando para vila."
        );
      }
    }
  }
}
