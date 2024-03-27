function boss(vidaGuerreiro, danoGuerreiro) {
  let vidachefao = 2000;

  while (vidaGuerreiro > 0 && vidachefao > 0) {
    alert("Sua vez: ");
    let ataque = prompt(
      "Escolha entre ataque normal, combo ou ataque especial (1,2,3)"
    );
    let dado = Math.random() * 6 + 1;
    let numero = parseInt(dado);
    alert("Você jogou dado. O número é: " + numero);

    if (ataque == "1") {
      vidachefao -= danoGuerreiro;
      alert(
        "Você deferiu um ataque simples com sucesso.Vida do Chefão: " +
          vidachefao
      );
    }

    if (ataque == "2") {
      var chance = Math.random();
      if (dado > 2) {
        let nv = vidachefao - danoGuerreiro * 2;
        let nd = danoGuerreiro * 2;

        alert(
          "Você deferiu um ataque combo com sucesso! O Chefão sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidachefao = nv;
      } else {
        alert(
          "Você deferiu um ataque no chefao mas errou. O Chefão não sofreu dano! " +
            vidachefao
        );
      }
    }

    if (ataque == "3") {
      var chance = Math.random();
      if (dado > 3) {
        let nv = vidachefao - danoGuerreiro * 3;
        let nd = danoGuerreiro * 3;

        alert(
          "Você deferiu um ataque especial com sucesso! O Chefão sofreu " +
            nd +
            " de dano. Vida restante: " +
            nv
        );
        vidachefao = nv;
      } else {
        alert(
          "Você deferiu um ataque no chefão mas errou. O Chefão não sofreu dano! " +
            vidachefao
        );
      }
    }

    alert("Vez do Chefao: ");
    var chance = Math.random() < 0.7;
    if (chance >= 0.7) {
      vidaGuerreiro -= 100;
      alert("O chefão ataca o guerreiro. Vida do guerreiro: " + vidaGuerreiro);
    } else {
      alert(
        "O chefão atacou mas falhou! Você continua com vida " +
          vidaGuerreiro +
          " de HP"
      );
    }
  }

  if (vidaGuerreiro <= 0) {
    alert("Perdeu a batalha. Sua jornada chegou ao fim tente outra vez ");
  } else {
    var azar = Math.random() < 0.7;
    if (azar >= 0.7) {
      alert(
        "Parabens você venceu a batalha contra chefão, a equipe comemora grande feito."
      );
    } else {
      if (vidaGuerreiro > 0) {
        let vida = vidaGuerreiro - 200;
        alert(
          "Você fica cansado e esta vendo um clarão quando atropeça e bate sua cabeça voce perdeu 200 de hp. Seu novo hp é: " +
            vida
        );
        alert(
          "Você consegue sair da masmorra e retorna para sua vila, parabéns você voltou da masmorra. Descanse alguns dias..."
        );
      } else {
        alert(
          "Voce fica cansado e avista um clarão caminhando em sua direção, você encontra a saida da caverna e devagar esta voltando para vila."
        );
      }
    }
  }
}
