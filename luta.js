function luta(vidaDoGuerreiro, danoDoGuerreiro) {
  let vidaDoMonstro = 800;
  let novohp = vidaDoGuerreiro;

  while (vidaDoGuerreiro >= 0 && vidaDoMonstro >= 0) {
    vidaDoMonstro -= danoDoGuerreiro;
    alert("O guerreiro ataca o monstro. Vida do monstro: " + vidaDoMonstro);
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
