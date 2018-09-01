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

iaVelocidade = 500;

// 0 = não marcado. 3 ia marcou. 30 humano marcou.
tabuleiro = new Array(0,0,0,0,0,0,0,0,0);
// exemplo: tabuleiro[2] = terceiro numero

sinucar = new Array(0,0,0,0,0,0,0,0,0);


// Melhor casa a ser marcada pela ia
iaIdeia = 100;

// Número de análises de linhas/colunas/diagonais a ser feitas (3 linhas, 3 colunas, 2 diagonais)
iaLinha = 1;
iaCasasAnalisadas = new Array (0,0,0);

vitorias = localStorage.getItem("ticVitorias");
derrotas = localStorage.getItem("ticDerrotas");
empates = localStorage.getItem("ticEmpates");

if (vitorias == null) {
	vitorias = 0;
}

if (derrotas == null) {
	derrotas = 0;
}

if (empates == null) {
	empates = 0;
}


// Ações

function iaPensar() {

	setTimeout(function(){
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
						log("Máquina marcou "+(Number(iaIdeia)+1)+". Ponto da vitória");
					} else {
						if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
							iaIdeia = iaCasasAnalisadas[1];
							iaLinha = 9;
							passarTurno();
							log("Máquina marcou "+(Number(iaIdeia)+1)+". Ponto da vitória");
						} else {
							if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
								iaIdeia = iaCasasAnalisadas[2];
								iaLinha = 9;
								passarTurno();
								log("Máquina marcou "+(Number(iaIdeia)+1)+". Ponto da vitória");
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
						log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo humano de ganhar.");
					} else {
						if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
							iaIdeia = iaCasasAnalisadas[1];
							iaLinha = 9;
							passarTurno();
							log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo humano de ganhar.");
						} else {
							if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
								iaIdeia = iaCasasAnalisadas[2];
								iaLinha = 9;
								passarTurno();
								log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo humano de ganhar.");
							}
						}
					}
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
					log("Máquina marcou "+(Number(iaIdeia)+1)+". Emboscada contra o humano.");
				}
			}
		}

		// Tentativa de sinucagem pela diagonal, logo no começo do jogo

		if (turno == 3) {

			for (iaLinha = 1; iaLinha < 3; iaLinha++ ) {
				casasAnalisadas();
				
				// Analisando
				var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
				if (linhaAnalisada == 63) {
					if (tabuleiro[iaCasasAnalisadas[1]] == 3) {

						// Primeira diagonal
						if (iaLinha == 1 && tabuleiro[2] == 0 && tabuleiro[6] == 0) {
							// Marcar em cruz
							if (tabuleiro[1] == 0) {
								iaIdeia = 1;
								iaLinha = 9;
								passarTurno();
								log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
							} else {
								if (tabuleiro[3] == 0) {
									iaIdeia = 3;
									iaLinha = 9;
									passarTurno();
									log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
								} else {
									if (tabuleiro[5] == 0) {
										iaIdeia = 5;
										iaLinha = 9;
										passarTurno();
										log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
									} else {
										if (tabuleiro[7] == 0) {
											iaIdeia = 7;
											iaLinha = 9;
											passarTurno();
											log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
										}
									}
								}
							}
						} else {
							// Segunda diagonal
							if (iaLinha == 2 && tabuleiro[0] == 0 && tabuleiro[8] == 0) {
								// Marcar em cruz
								if (tabuleiro[1] == 0) {
									iaIdeia = 1;
									iaLinha = 9;
									passarTurno();
									log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
								} else {
									if (tabuleiro[3] == 0) {
										iaIdeia = 3;
										iaLinha = 9;
										passarTurno();
										log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
									} else {
										if (tabuleiro[5] == 0) {
											iaIdeia = 5;
											iaLinha = 9;
											passarTurno();
											log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
										} else {
											if (tabuleiro[7] == 0) {
												iaIdeia = 7;
												iaLinha = 9;
												passarTurno();
												log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo estratégia de emboscada clássica.");
											}
										}
									}
								}
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
					log("Máquina marcou "+(Number(iaIdeia)+1)+". Impedindo emboscada tradicional.");
				}
			}
		}

	    // 7 Se o espaço do centro estiver vazio, marque lá
		if (turno == 3) {
			if (tabuleiro[4] == 0) {
				iaIdeia = 4;
				passarTurno();
				log("Máquina marcou "+(Number(iaIdeia)+1)+". Marcando centro.");
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
						log("Máquina marcou "+(Number(iaIdeia)+1)+". Marcando lado contrário à peça do humano.");
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0 && tabuleiro[iaCasasAnalisadas[1]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno();
							log("Máquina marcou "+(Number(iaIdeia)+1)+". Marcando lado contrário à peça do humano.");
						}
					}
				}

			}
		}



		// 6 Se tiver uma quina vazia, preencha.
		if (turno == 3) {
			for (iaLinha = 1; iaLinha < 3; iaLinha++ ) {
				casasAnalisadas();
				
				// Analisando
				var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
				if (linhaAnalisada <= 60) {
					if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
						iaIdeia = iaCasasAnalisadas[0];
						iaLinha = 9;
						passarTurno();
						log("Máquina marcou "+(Number(iaIdeia)+1)+". Marcando diagonal vazia.");
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno();
							log("Máquina marcou "+(Number(iaIdeia)+1)+". Marcando diagonal vazia.");
						}
					}
				}

			}
		}

		


		// 8 Marque aleatoriamente um espaço vazio.
		if (turno == 3) {
			for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
				casasAnalisadas();
				
				// Analisando
				if (tabuleiro[iaCasasAnalisadas[0]] == 0) {
					iaIdeia = iaCasasAnalisadas[0];
					iaLinha = 9;
					passarTurno();
					log("Máquina marcou "+(Number(iaIdeia)+1)+". Lugar vazio aleatório.");
				} else {
					if (tabuleiro[iaCasasAnalisadas[1]] == 0) {
						iaIdeia = iaCasasAnalisadas[1];
						iaLinha = 9;
						passarTurno();
						log("Máquina marcou "+(Number(iaIdeia)+1)+". Lugar vazio aleatório.");
					} else {
						if (tabuleiro[iaCasasAnalisadas[2]] == 0) {
							iaIdeia = iaCasasAnalisadas[2];
							iaLinha = 9;
							passarTurno();
							log("Máquina marcou "+(Number(iaIdeia)+1)+". Lugar vazio aleatório.");
						}
					}
				}
			}
		}

		// Interface
		$(".tic-casa-"+iaIdeia).html("X").removeClass("tic-livre").addClass("tic-ia");
		vitoria();

		// log("Ia Marcou "+iaIdeia);
	}, iaVelocidade);

}

function casasAnalisadas() {
	// Diagonais
	if (iaLinha == 1) {
		iaCasasAnalisadas = new Array (0,4,8);
	}
	if (iaLinha == 2) {
		iaCasasAnalisadas = new Array (2,4,6);
	}

	// Linhas
	if (iaLinha == 3) {
		iaCasasAnalisadas = new Array (0,1,2);
	}
	if (iaLinha == 4) {
		iaCasasAnalisadas = new Array (3,4,5);
	}
	if (iaLinha == 5) {
		iaCasasAnalisadas = new Array (6,7,8);
	}

	// Colunas
	if (iaLinha == 6) {
		iaCasasAnalisadas = new Array (0,3,6);
	}
	if (iaLinha == 7) {
		iaCasasAnalisadas = new Array (1,4,7);
	}
	if (iaLinha == 8) {
		iaCasasAnalisadas = new Array (2,5,8);
	}

	if (iaLinha == 9) {
		iaCasasAnalisadas = new Array (10,10,10);
	}

	
}

function zerarTabuleiro() {
	// Interface
	$(".tic-msg").html("");
	$(".tic-casa").removeClass("tic-h").removeClass("tic-ia").addClass("tic-livre").html("");
	$(".tic-vitoria").removeClass("tic-linha1").removeClass("tic-linha2").removeClass("tic-linha3").removeClass("tic-coluna1").removeClass("tic-coluna2").removeClass("tic-coluna3").removeClass("tic-diagonal1").removeClass("tic-diagonal2");
	turno = 3;

	// IA

	tabuleiro = new Array(0,0,0,0,0,0,0,0,0);
	sinucar = new Array(0,0,0,0,0,0,0,0,0);

	// Quem começa
	moeda = Math.floor(Math.random() * 2);

	if (moeda == 0) {
		turno = 3;
		log("A máquina começou");
	} else {
		turno = 30;
		log("O humano começa");
	}

	if (turno == 3) {
		iaPensar();
	}


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

function vitoria() {
	for (iaLinha = 1; iaLinha < 10; iaLinha++ ) {
		casasAnalisadas();
		
		// Analisando

		if (iaLinha < 9) {
			var linhaAnalisada = tabuleiro[iaCasasAnalisadas[0]]+tabuleiro[iaCasasAnalisadas[1]]+tabuleiro[iaCasasAnalisadas[2]];
			if (linhaAnalisada == 90) {
				log("O humano venceu. Mas isso é impossível.");
				vitorias = (Number(vitorias) + 1);
				$(".tic-vitorias strong").html(vitorias);
				localStorage.setItem("ticVitorias", vitorias);

				if (iaLinha == 1) {
					$(".tic-vitoria").addClass("tic-diagonal1");
				}

				if (iaLinha == 2) {
					$(".tic-vitoria").addClass("tic-diagonal2");
				}

				if (iaLinha == 3) {
					$(".tic-vitoria").addClass("tic-linha1");
				}

				if (iaLinha == 4) {
					$(".tic-vitoria").addClass("tic-linha2");
				}

				if (iaLinha == 5) {
					$(".tic-vitoria").addClass("tic-linha3");
				}

				if (iaLinha == 6) {
					$(".tic-vitoria").addClass("tic-coluna1");
				}

				if (iaLinha == 7) {
					$(".tic-vitoria").addClass("tic-coluna2");
				}

				if (iaLinha == 8) {
					$(".tic-vitoria").addClass("tic-coluna3");
				}
				iaLinha = 10;
				turno = 100;

			} else {
				if (linhaAnalisada == 9) {
					log("A máquina venceu.");
					derrotas = (Number(derrotas) + 1);
					$(".tic-derrotas strong").html(derrotas);
					localStorage.setItem("ticDerrotas", derrotas);

					if (iaLinha == 1) {
						$(".tic-vitoria").addClass("tic-diagonal1");
					}

					if (iaLinha == 2) {
						$(".tic-vitoria").addClass("tic-diagonal2");
					}

					if (iaLinha == 3) {
						$(".tic-vitoria").addClass("tic-linha1");
					}

					if (iaLinha == 4) {
						$(".tic-vitoria").addClass("tic-linha2");
					}

					if (iaLinha == 5) {
						$(".tic-vitoria").addClass("tic-linha3");
					}

					if (iaLinha == 6) {
						$(".tic-vitoria").addClass("tic-coluna1");
					}

					if (iaLinha == 7) {
						$(".tic-vitoria").addClass("tic-coluna2");
					}

					if (iaLinha == 8) {
						$(".tic-vitoria").addClass("tic-coluna3");
					}
					iaLinha = 10;
					turno = 100;
				} 
			}

		} else {
			if(tabuleiro[0] > 0 && tabuleiro[1] > 0 && tabuleiro[2] > 0 && tabuleiro[3] > 0 && tabuleiro[4] > 0 && tabuleiro[5] > 0 && tabuleiro[6] > 0 && tabuleiro[7] > 0 && tabuleiro[8] > 0 ) {
					log("Deu velha.");
					iaLinha = 10;
					turno = 100;
					empates = (Number(empates) + 1);
					$(".tic-empates strong").html(empates);
					localStorage.setItem("ticEmpates", empates);
			}
		}

	}


	// turno = 100;
	// alert("alguem ganhou");
}

// Criando log

function log(msg) {
	$(".tic-msg").prepend("<p>"+msg+"</p>");
}

// Debug

function teste() {
	iaVelocidade = 0;

	setInterval(function(){
		if (turno == 30) {
			var random = Math.floor(Math.random() * 9);
			$(".tic-casa-"+random).click();
		}

		if (turno == 100) {
			zerarTabuleiro();
		}
	}, 0);

	
}



// Interface
$(function(){
	

	zerarTabuleiro();

	$(".tic-vitorias strong").html(vitorias);
	$(".tic-derrotas strong").html(derrotas);
	$(".tic-empates strong").html(empates);
	
	$(".tic-casa").click(function(){
		var casaConteudo = $(this).html();
		if (casaConteudo == "" && turno == 30) {
			var casa = Number($(this).attr("casa"));
			var conteudo = $(this).html();
			$(this).removeClass("tic-livre");
			log("Humano marcou a casa "+(Number(casa)+1));

			if (conteudo == "" || conteudo == undefined) {
				humanoMarcar(casa);
				$(this).html("O").addClass("tic-h");
				iaPensar();
			}
		}

		if (turno == 100) {
			zerarTabuleiro();
		}

	});
});
