// Lógica

// https://www.youtube.com/watch?v=mhe5e2B9bL8

// Jogo da velha:

// 1 Checar possibilidade de vitória
// 2 Marcando pra não perder
// 3 Se o humano puder sinucar
// 4 se a IA puder sinucar
// 5 Se o espaço do centro estiver vazio, marque lá
// 6 Marcando a contrária.
// 7 Se tiver uma quina vazia, preencha.
// 8 Marque aleatoriamente um espaço vazio.


// Criando variáveis
	// 0 = Antes de jogar. 3 = ia. 30 = humano. 100 = jogo finalizado
turno = 3;

// 0 = não marcado. 3 ia marcou. 30 humano marcou.
tabuleiro = new Array(0,0,0,0,0,0,0,0,0);
// exemplo: tabuleiro[2] = terceiro numero

sinucar = new Array(0,0,0,0,0,0,0,0,0);


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
					passarTurno();
					console.log("Checar possibilidade de vitória");
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						iaLinha = 9;
						passarTurno();
						console.log("Checar possibilidade de vitória");
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno();
							console.log("Checar possibilidade de vitória");
						}
					}
				}
			}

		}
	}



	// 2 Marcando pra não perder
	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 60) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					iaLinha = 9;
					passarTurno();
					console.log("Marcando pra não perder");
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						iaLinha = 9;
						passarTurno();
						console.log("Marcando pra não perder");
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno();
							console.log("Marcando pra não perder");
						}
					}
				}
			}

		}
	}

	// 3 Se o humano puder sinucar

	if (turno == 3) {
		sinucar = new Array(0,0,0,0,0,0,0,0,0);

		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 30) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					sinucar[iaCasasAnalisadas[0]] = sinucar[iaCasasAnalisadas[0]]+1;
				}

				if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
					sinucar[iaCasasAnalisadas[1]] = sinucar[iaCasasAnalisadas[1]]+1;
				}

				if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
					sinucar[iaCasasAnalisadas[2]] = sinucar[iaCasasAnalisadas[2]]+1;
				}
			}
		}

		for (iaCasas = 0; iaCasas < 9; iaCasas++ ) {
			casasAnalisadas();
			// Analisando
			if (sinucar[iaCasas] > 1) {
				iaIdeia = iaCasas;
				iaLinha = 9;
				iaCasas = 9;
				passarTurno();
				console.log("Se o humano puder sinucar");
			}
		}
	}

	// 4 Se a ia puder sinucar

	if (turno == 3) {
		sinucar = new Array(0,0,0,0,0,0,0,0,0);

		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 3) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					sinucar[iaCasasAnalisadas[0]] = sinucar[iaCasasAnalisadas[0]]+1;
				}

				if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
					sinucar[iaCasasAnalisadas[1]] = sinucar[iaCasasAnalisadas[1]]+1;
				}

				if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
					sinucar[iaCasasAnalisadas[2]] = sinucar[iaCasasAnalisadas[2]]+1;
				}
			}
		}

		for (iaCasas = 0; iaCasas < 9; iaCasas++ ) {
			casasAnalisadas();
			// Analisando
			if (sinucar[iaCasas] > 1) {
				iaIdeia = iaCasas;
				iaLinha = 9;
				iaCasas = 9;
				passarTurno();
				console.log("Se a ia puder sinucar");
			}
		}
	}



	// 5 Marcando a contrária.
	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada <= 33 && linhaAnalisada > 3) {
				if (tabuleiro[iaCasasAnalisadas[0]] == 0 && tabuleiro[iaCasasAnalisadas[1]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					iaLinha = 9;
					passarTurno();
					console.log("Marcando a contrária.");
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0 && tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						iaLinha = 9;
						passarTurno();
						console.log("Marcando a contrária.");
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
					console.log("Se tiver uma quina vazia, preencha.");
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						iaLinha = 9;
						passarTurno();
						console.log("Se tiver uma quina vazia, preencha.");
					}
				}
			}

		}
	}

	// 7 Se o espaço do centro estiver vazio, marque lá
	if (turno == 3) {
		if (tabuleiro[4] == 0) {
			iaIdeia = 4;
			passarTurno();
			console.log("Se o espaço do centro estiver vazio, marque lá");
		}
	}


	// 8 Marque aleatoriamente um espaço vazio.
	if (turno == 3) {
		for (iaLinha = 1; iaLinha < 4; iaLinha++ ) {
			casasAnalisadas();
			
			// Analisando
			if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
				iaIdeia = iaCasasAnalisadas[0];
				iaLinha = 9;
				passarTurno();
				console.log("Marque aleatoriamente um espaço vazio.");
			} else {
				if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
					iaIdeia = iaCasasAnalisadas[1];
					iaLinha = 9;
					passarTurno();
					console.log("Marque aleatoriamente um espaço vazio.");
				} else {
					if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
						iaIdeia = iaCasasAnalisadas[2];
						iaLinha = 9;
						passarTurno();
						console.log("Marque aleatoriamente um espaço vazio.");
					}
				}
			}
		}
	}

	// Interface
	$(".tic-casa-"+iaIdeia).html("X").addClass("tic-ia");
	console.log("Ia Marcou "+iaIdeia);
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
	sinucar = new Array(0,0,0,0,0,0,0,0,0);

	// Quem começa
	var moeda = Math.floor(Math.random() * 2);
	if (moeda == 0) {
		turno = 3;
		console.log("A máquina começa");
	} else {
		turno = 30;
		console.log("O humano começa");
	}

	// Interface

	$(".tic-casa").removeClass("tic-h").removeClass("tic-ia").html("");
}

function passarTurno() {
	if (turno == 3) {
		tabuleiro[iaIdeia] = 3;
		turno = 30;
		
	} else {
		if (turno == 30) {
			turno = 3;
			
		}

	}
	
}

function humanoMarcar(local) {
	if (turno == 30) {
		tabuleiro[local] = 30;
		passarTurno();
	}
}

// Começando



$(function(){
	$(".tic-casa").click(function(){
		var casa = Number($(this).attr("casa"));
		var conteudo = $(this).html();
		console.log("Humano marcou "+casa);

		if (conteudo == "" || conteudo == undefined) {
			humanoMarcar(casa);
			$(this).html("O").addClass("tic-h");
			iaPensar();
		}
	});

	zerarTabuleiro();
	if (turno == 3) {
		iaPensar();
	}
});

