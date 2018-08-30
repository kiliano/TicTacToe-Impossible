// Lógica

// https://www.youtube.com/watch?v=mhe5e2B9bL8

// Jogo da velha:

// Checar possibilidade de vitória
// Se o opotente ocupar 2 casas seguidas, ocupe a terceira
// Se tiver algum movimento que cria duas linhas com duas casas ocupadas, faça ele (criando o empasse contra o inimigo)
// Se o espaço do centro estiver vazio, marque lá
// Se o opotente preencheu uma quina, marque a quina contrária.
// Se tiver uma quina vazia, preencha.
// Marque aleatoriamente um espaço vazio.


// Criando variáveis
	// 0 = Antes de jogar. 3 = ia. 30 = humano. 100 = jogo finalizado
turno = 0;

// 0 = não marcado. 3 ia marcou. 30 humano marcou.
tabuleiro = new Array('0','0','0','0','0','0','0','0','0');
// exemplo: tabuleiro[2] = terceiro numero

// Melhor casa a ser marcada pela ia
iaIdeia = 100;

// Número de análises de linhas/colunas/diagonais a ser feitas (3 linhas, 3 colunas, 2 diagonais)
iaLinha = 1;



// Ações

function iaPensar() {


	// Se o opotente ocupar 2 casas seguidas, ocupe a terceira
		for (iaLinha = 1; iaLinha < 9; iaLinha++ ) {
			// Linhas
			if (iaLinha == 1) {
				var iaCasasAnalisadas = new Array ('0','1','2');
			}
			if (iaLinha == 2) {
				var iaCasasAnalisadas = new Array ('3','4','5');
			}
			if (iaLinha == 3) {
				var iaCasasAnalisadas = new Array ('6','7','8');
			}

			// Colunas
			if (iaLinha == 4) {
				var iaCasasAnalisadas = new Array ('0','3','6');
			}
			if (iaLinha == 5) {
				var iaCasasAnalisadas = new Array ('1','4','7');
			}
			if (iaLinha == 6) {
				var iaCasasAnalisadas = new Array ('2','5','8');
			}

			// Diagonais
			if (iaLinha == 7) {
				var iaCasasAnalisadas = new Array ('0','4','8');
			}
			if (iaLinha == 8) {
				var iaCasasAnalisadas = new Array ('2','4','6');
			}
			
			// Analisando
			var linhaAnalisada = Number(tabuleiro[Number(iaCasasAnalisadas[0])])+Number(tabuleiro[Number(iaCasasAnalisadas[1])])+Number(tabuleiro[Number(iaCasasAnalisadas[2])]);
			if (linhaAnalisada == 60) {
				if (Number(tabuleiro[Number(iaCasasAnalisadas[0])]) == 0) {
					iaIdeia = Number(iaCasasAnalisadas[0]);
					console.log(iaIdeia);
					iaLinha = 9;
				} else {
					if (Number(tabuleiro[Number(iaCasasAnalisadas[1])]) == 0) {
						iaIdeia = Number(iaCasasAnalisadas[1]);
						console.log(iaIdeia);
						iaLinha = 9;
					} else {
						if (Number(tabuleiro[Number(iaCasasAnalisadas[2])]) == 0) {
							iaIdeia = Number(iaCasasAnalisadas[2]);
							console.log(iaIdeia);
							iaLinha = 9;
						}
					}
				}
			}

		}
		


}


function zerarTabuleiro() {

}

function passarTurno(jogador) {

}

function iaMarcar(local) {

}

function humanoMarcar(local) {

}