// Lógica

// https://www.youtube.com/watch?v=mhe5e2B9bL8

// Jogo da velha:

// 1 Checar possibilidade de vitória
// 2 Se o opotente ocupar 2 casas seguidas, ocupe a terceira
// 3 Se tiver algum movimento que cria duas linhas com duas casas ocupadas, faça ele (criando o empasse contra o inimigo)
// 4 Se o espaço do centro estiver vazio, marque lá
// 5 Se o opotente preencheu uma quina, marque a quina contrária.
// 6 Se tiver uma quina vazia, preencha.
// 7 Marque aleatoriamente um espaço vazio.


// Criando variáveis
	// 0 = Antes de jogar. 3 = ia. 30 = humano. 100 = jogo finalizado
turno = 3;

// 0 = não marcado. 3 ia marcou. 30 humano marcou.
tabuleiro = new Array(0,0,0,0,0,0,0,0,0);
// exemplo: tabuleiro[2] = terceiro numero

tabuleiro = new Array(0,0,0,0,3,0,30,0,0);



// Melhor casa a ser marcada pela ia
iaIdeia = 100;

// Número de análises de linhas/colunas/diagonais a ser feitas (3 linhas, 3 colunas, 2 diagonais)
iaLinha = 1;
iaCasasAnalisadas = new Array (0,0,0);



// Ações

function iaPensar() {

	// 1 Checar possibilidade de vitória

	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 6) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					console.log(iaIdeia);
					iaLinha = 9;
					passarTurno(30)
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						console.log(iaIdeia);
						iaLinha = 9;
						passarTurno(30)
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							console.log(iaIdeia);
							iaLinha = 9;
							passarTurno(30)
						}
					}
				}
			}

		}
	}



	// 2 Se o opotente ocupar 2 casas seguidas, ocupe a terceira
	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 60) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					console.log(iaIdeia);
					iaLinha = 9;
					passarTurno(30)
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						console.log(iaIdeia);
						iaLinha = 9;
						passarTurno(30)
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							console.log(iaIdeia);
							iaLinha = 9;
							passarTurno(30)
						}
					}
				}
			}

		}
	}

	// 3 Se tiver algum movimento que cria duas linhas com duas casas ocupadas, faça ele (criando o empasse contra o inimigo)

		// Esse vai dar trabalho



	// 4 Se o espaço do centro estiver vazio, marque lá
	if (turno == 3) {
		if (tabuleiro[4] == 0) {
			iaIdeia = 4;
			console.log(iaIdeia);
			passarTurno(30)
		}
	}

	// 5 Se o opotente preencheu uma quina, marque a quina contrária.
	if (turno == 3) {
		if (tabuleiro[0] == 30 && tabuleiro[8] == 0) {
			
		}

		for (iaLinha = 7; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			console.log("Marcando lado contraro - "+iaLinha);

			if (linhaAnalisada <= 33) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					console.log(iaIdeia);
					iaLinha = 9;
					passarTurno(30);
					console.log("Opcao1");
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						console.log(iaIdeia);
						iaLinha = 9;
						passarTurno(30);
						console.log("Opcao2");
					}
				}
			}

		}
	}


	// 6 Se tiver uma quina vazia, preencha.
	// 7 Marque aleatoriamente um espaço vazio.
}

function casasAnalisadas() {
	// Linhas
	if (iaLinha == 1) {
		iaCasasAnalisadas = new Array (0,1,2);
	}
	if (iaLinha == 2) {
		iaCasasAnalisadas = new Array (3,4,5);
	}
	if (iaLinha == 3) {
		iaCasasAnalisadas = new Array (6,7,8);
	}

	// Colunas
	if (iaLinha == 4) {
		iaCasasAnalisadas = new Array (0,3,6);
	}
	if (iaLinha == 5) {
		iaCasasAnalisadas = new Array (1,4,7);
	}
	if (iaLinha == 6) {
		iaCasasAnalisadas = new Array (2,5,8);
	}

	// Diagonais
	if (iaLinha == 7) {
		iaCasasAnalisadas = new Array (0,4,8);
	}
	if (iaLinha == 8) {
		iaCasasAnalisadas = new Array (2,4,6);
	}
}

function zerarTabuleiro() {

}

function passarTurno(jogador) {
	turno = jogador;
}

function iaMarcar(local) {

}

function humanoMarcar(local) {

}