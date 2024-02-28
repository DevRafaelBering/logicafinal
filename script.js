function greet() {
  //Variaveis em javascript (var, let, const)
  //
  alert(
    "Início do jogo: Escolher o nome e distribuir atributos. Distribua 20 pontos entre Vida e Dano para começar o jogo."
  );
  let nome = prompt("Digite seu nome"); //criei variavel e nomiei com nome
  let vida = +prompt("Digite quantos pontos deseja colocar em vida");
  let ataque = +prompt("Digite quantos pontos deseja colocar em dano");
  while (!nome || vida + ataque != 20) {
    alert(
      "Deu errado digite novamente, lembrando que nome nao pode esta vazio, e nao pode passar vida + ataque = 20"
    );
    nome = prompt("Digite seu nome"); //criei variavel e nomiei com nome
    vida = +prompt("Digite quantos pontos deseja colocar em vida");
    ataque = +prompt("Digite quantos pontos deseja colocar em dano");
  }
  let hp = vida * 100;
  let dano = ataque * 10;
  alert("Seu nome é " + nome + " sua vida é" + hp + " seu ataque é" + dano);
  alert(
    "Olá " +
      nome +
      ", ja se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você está se preparando para sua primeira incursão em uma masmorra, acompanhado por sua equipe de aventureiros. Após alguns dias de viagem, sua equipe finalmente chega à misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra estão escorregadias de umidade, e o ar cheira a mofo e decomposição."
  );

  let op = prompt(
    "Digite o que voce quer fazer ? Entrar na dungeon (A) Explorar redondezas (B)"
  );

  if (op == "A") {
    alert(
      "Ao entrar na masmorra, voce percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo nas profundezas das masmorra, mas nao consegue identificar exatamente o que é"
    );
  } else {
    var chance = Math.random();
    if (chance >= 0.5) {
      alert(
        "Você decide buscar na área circundante, esperando encontrar pistas ou recursos valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso,você continua a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção tem propriedades de cura."
      );
      hp = hp + 500;
      alert("Seu novo hp é " + hp);
    } else {
      alert(
        "Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a exectativa cresce enquanto você se reara ara adentrar a dungeon"
      );
    }
  }

  let ope = prompt(
    "O que vai fazer ? (A)Seguir caminhando nas profundezas da caverna (B)Avaliar o interior da caverna"
  );

  if (ope == "A") {
    alert(
      "Ao seguir caminhando pela caverna, o tempo passa e a sua equipe de aventureiros começa a ganhar confiança a atenção vai se dispersando e quando notam, todos estão fazendo piadas em tom de voz descontraído. Tudo parece estar indo bem até que todos começam a ouvir um ruído arrepiante surgindo em meio a suas vozes, o clima alegre se dissipa repentinamente, todos ficam alertas e em silêncio tentando observar o que os espera pela frente"
    );
  } else {
    alert(
      "Ao analiar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes da caverna e encontra um objeto pendurado..."
    );
    alert(
      "O objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao se aproximar para examiná-la, voce percebe que ainda há vestígios de óleo dentro dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar atenção ao que os espera diante"
    );
  }

  alert(
    "Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente sentindo a presença ameaçadora dos mortos-vivos. Uma batalha começa"
  );
}
