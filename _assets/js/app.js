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
					iaLinha = 9;
					passarTurno()
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						iaLinha = 9;
						passarTurno()
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno()
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
					iaLinha = 9;
					passarTurno()
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						iaLinha = 9;
						passarTurno()
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno()
						}
					}
				}
			}

		}
	}

	// 3 Se tiver algum movimento que cria duas linhas com duas casas ocupadas, faça ele (criando o empasse contra o inimigo)

	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 60) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					iaLinha = 9;
					passarTurno()
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						iaLinha = 9;
						passarTurno()
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno()
						}
					}
				}
			}

		}
	}



	// 4 Se o espaço do centro estiver vazio, marque lá
	if (turno == 3) {
		if (tabuleiro[4] == 0) {
			iaIdeia = 4;
			passarTurno()
		}
	}

	// 5 Se o opotente preencheu uma quina, marque a quina contrária.
	if (turno == 3) {
		for (iaLinha = 7; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada <= 33 && linhaAnalisada > 3) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					iaLinha = 9;
					passarTurno();
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						iaLinha = 9;
						passarTurno();
					}
				}
			}

		}
	}


	// 6 Se tiver uma quina vazia, preencha.
	if (turno == 3) {
		for (iaLinha = 7; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada <= 60) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					iaLinha = 9;
					passarTurno();
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						iaLinha = 9;
						passarTurno();
					}
				}
			}

		}
	}


	// 7 Marque aleatoriamente um espaço vazio.
	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 4; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
				iaIdeia = iaCasasAnalisadas[0];
				iaLinha = 9;
				passarTurno()
			} else {
				if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
					iaIdeia = iaCasasAnalisadas[1];
					iaLinha = 9;
					passarTurno()
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						iaLinha = 9;
						passarTurno()
					}
				}
			}
		}
	}
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
	tabuleiro = new Array(0,0,0,0,0,0,0,0,0);

	// Quem começa
	var moeda = Math.floor(Math.random() * 2);
	if (moeda == 0) {
		turno == 3;
		console.log("A máquina começa");
	} else {
		turno == 30;
		console.log("O humano começa");
	}
}

function passarTurno() {
	if (turno == 3) {
		tabuleiro[iaIdeia] = 3;
		turno = 30;
		mostrar();
		console.log("Agora é o turno do Jogador");
	} else {
		if (turno == 30) {
			turno = 3;
			mostrar();
			console.log("Agora é o turno da IA");
		}

	}
	
}

function humanoMarcar(local) {
	tabuleiro[local] = 30;
	passarTurno();
}

function mostrar() {
	tabuleiroMostrar = new Array("","","","","","","","","");


	for (iaContar = 0; iaContar < 9; iaContar++ ) {
		if (tabuleiro[iaContar] == 3) {
			tabuleiroMostrar[iaContar] = " X";
		}

		if (tabuleiro[iaContar] == 30) {
			tabuleiroMostrar[iaContar] = " O";
		}

		if (tabuleiro[iaContar] == 0) {
			tabuleiroMostrar[iaContar] = " _";
		}
	}

	console.log(tabuleiroMostrar[0]+tabuleiroMostrar[1]+tabuleiroMostrar[2]);
	console.log(tabuleiroMostrar[3]+tabuleiroMostrar[4]+tabuleiroMostrar[5]);
	console.log(tabuleiroMostrar[6]+tabuleiroMostrar[7]+tabuleiroMostrar[8]);

}


// Começando
zerarTabuleiro();