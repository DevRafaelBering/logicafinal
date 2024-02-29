function luta(vidaDoGuerreiro, danoDoGuerreiro) {
  let vidaDoMonstro = 800;
  let novohp = vidaDoGuerreiro;

  while (vidaDoGuerreiro > 0 && vidaDoMonstro > 0) {
    let ataque = prompt(
      "Escolha entre ataque normal, combo ou ataque especial (1,2,3)"
    );
    let dado = Math.random() * 6 + 1;
    let numero = parseInt(dado);
    alert("Você jogou dado. O número é: " + numero);
    if (ataque == "1") {
      alert("Você deferiu um ataque simples com sucesso");
      vidaDoMonstro -= danoDoGuerreiro;
    }

    if (ataque == "2") {
      var chance = Math.random();
      if (chance >= 0.5) {
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
          "Você deferiu um ataque no monstro mas errou. O monstro nao sofreu dano! " +
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
          "Você deferiu um ataque especial com sucesso! O Monstro sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidaDoMonstro = nv;
      } else {
        alert(
          "Você deferiu um ataque no monstro mas errou. O monstro nao sofreu dano! " +
            vidaDoMonstro
        );
      }
    }

    //vidaDoMonstro -= danoDoGuerreiro;
    //alert("O guerreiro ataca o monstro. Vida do monstro: " + vidaDoMonstro);
    vidaDoGuerreiro -= 60;
    alert("O monstro ataca o guerreiro. Vida do guerreiro: " + vidaDoGuerreiro);
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
}
