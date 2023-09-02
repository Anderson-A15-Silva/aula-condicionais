// Exercícios de interpretação de códigos

// Exercício 1
/*
Resposta A:
O código exibe uma mensagem que corresponde a condição (resto da divisão por dois igual a zero em valor e tipo), caso seja 'true' o valor exibe "Passou no teste", caso seja 'false' ele exibe "Não passou no teste".
*/
/*
Resposta B:
O código exibe "Passou no teste" quando os números inseridos pelo usuário são pares.
*/
/*
Resposta C:
O código exibe "Não passou no teste" quando números inseridos pelo usuário são ímpares.
*/


// Exercício 2

/*
Resposta A
O código serve para o usuário escolher uma fruta e verificar o seu preço, a condição especificada pelo desenvolvedor foi dividida em cinco casos ('Laranja', 'Maçã', 'Uva', 'Pêra', 'default'), o último será exibido em uma situação onde seja digitado qualquer outra fruta no prompt.
*/

/*
Resposta B:
No console, a mensagem exibida seria esta:
O preço da fruta Maçã é R$ 2.25
*/

/*
Resposta C:
 ------------------------------------
 O  preço da fruta  Pêra  é  R$  5
 ------------------------------------

 Ou seja, ele continuaria a exibir sem a 'quebra' de uma condição para a outra.
*/

// Exercício 3

/*
Resposta A:
Na primeira linha, o código corresponde a uma variável que armazena o número inserido pelo usuário. Como o resultado do prompt é igual a uma 'String', o 'Number' foi adicionado para indicar isto ao "programa".
*/

/*
Resposta B
Se o número inserido no prompt for '10', o resultado exibido será este:
-------------------------------------------
  Esse número passou no teste
  error
-------------------------------------------
Obs: O erro ocorreu devido a variável mensagem ter sido colocada em um escopo local dentro do 'if' (Mais informações na Resposta C). 
O valor exibido foi apenas parcial. Lembrando que este 'error' é apenas uma representação, no console terá mais informações sendo exibidas.

Se o número inserido no prompt for '-10', o resultado exibido será este:
-----------
  error
-----------
Obs: Lembrando que este 'error' é apenas uma representação, no console terá mais informações sendo exibidas.
*/

/*
Resposta C:
A variável 'mensagem' (let mensagem = "Essa mensagem é secreta!!") está armazenada dentro do 'if' como um resultado para uma condição preenchida, 
portanto esta variável está no escopo local, não podendo ser utilizada por elementos fora deste escopo, diferente do escopo global 
(que foi o caso da varíavel da primeira linha: 'const numero = Number(prompt("Digite o primeiro número."))')
*/


// Exercícios de escrita de códigos

// Exercício 1

/*
Resposta A:
const idadePergunta = prompt("Qual a sua idade?");

Resposta B:
const idadeUsuario = Number(idadePergunta);

Resposta C:
if (idadeUuario >= 18) {
console.log("Você pode dirigir");
} else {
console.log("Você não pode dirigir.");
};

Resultado Final:

const idadePergunta = prompt("Qual a sua idade?");
const idadeUsuario = Number(idadePergunta);

if (idadeUsuario >= 18) {
console.log("Você pode dirigir");
} else {
console.log("Você não pode dirigir.");
};
*/


// Exercício 2
/*
Resposta:

const turnoPergunta = prompt("Qual o seu turno? (M, V ou N)");
const turnoUsuario = turnoPergunta.toUpperCase();

if (turnoUsuario === "M") {
console.log("Bom dia!");
} else {
if (turnoUsuario === "V") {
console.log("Bom tarde!");
} else {
if (turnoUsuario === "N") {
console.log("Boa noite!");
} else {
console.log("Não encontrado.");
}
}
};
*/

// Exercício 3
/*
Resposta:

const turnoPergunta = prompt("Qual o seu turno? (M, V ou N)");
const turnoUsuario = turnoPergunta.toUpperCase();

switch (turnoUsuario) {
 case "M": // Matutino
  console.log("Bom dia!");
  break;
 case "V": // Vespertino
  console.log("Boa tarde!");
  break;
 case "N": // Noturno
  console.log("Boa noite!");
  break;
 default:
  console.log("Não encontrado.");
  break;
};
*/

// Exercício 4
/*
Resposta:

const generoFilmePergunta = prompt("Qual o gênero do filme?");
const generoFilme = generoFilmePergunta.toLowerCase();
const precoIngressoPergunta = prompt("Quanto custa o ingresso?");
const precoIngresso = Number(precoIngressoPergunta);
const cinemaFilmePergunta = prompt("Seu amigo quer ver o filme? (Sim ou Não)");
const cinemaFilme = cinemaFilmePergunta.toLowerCase();

if (generoFilme !== "fantasia") {
 console.log("Seu amigo não quer assistir este filme (Escolha outro gênero de filme).");
} else {
if (precoIngresso >= 15) {
console.log("Seu amigo não tem dinheiro para o ingresso deste filme.");
} else {
if (cinemaFilme === "sim") {
console.log("Bom filme!");
} else {
 console.log("Seu amigo não topou assistir o filme. Escolha outro filme :(");
}
}
};
*/


// Desafio 1
/*
const generoFilmePergunta = prompt("Qual o gênero do filme?");
const generoFilme = generoFilmePergunta.toLowerCase();
const precoIngressoPergunta = prompt("Quanto custa o ingresso?");
const precoIngresso = Number(precoIngressoPergunta);
const cinemaFilmePergunta = prompt("Seu amigo quer ver o filme? (Sim ou Não");
const cinemaFilme = cinemaFilmePergunta.toLowerCase();
const lanchinhoPergunta = prompt("Qual pipoca você vai comprar? (Doce ou Salgada");
const lanchinhoFilme = lanchinhoPergunta.toLowerCase();

if (generoFilme !== "fantasia") {
 console.log("Seu amigo não quer assistir este filme (Escolha outro gênero de filme).");
} else {
if (precoIngresso >= 15) {
console.log("Seu amigo não tem dinheiro para o ingresso deste filme.");
} else {
if (cinemaFilme === "sim") {
console.log("Bom filme!");
console.log(`Aproveite a sua pipoca ${lanchinhoFilme}`);
} else {
 console.log("Seu amigo não topou assistir o filme. Escolha outro filme :(");
}
}
};
*/

// Desafio 2 (Incompleto)
/*
Resposta:
*/

const nomeCompletoPergunta = prompt("Insira o seu nome completo:");
const nomeCompleto = nomeCompletoPergunta;

const tipoDeJogoPergunta = prompt("Qual o tipo de jogo? (IN ou DO))");
const tipoDeJogo = tipoDeJogoPergunta.toUpperCase();

const etapaDoJogoPergunta = prompt("Qual a etapa do jogo? (FI, SF ou DT))");
const etapaDoJogo = etapaDoJogoPergunta.toUpperCase();

const categoriaDoJogoPergunta = prompt("Qual a categoria do jogo?");
const categoriaDoJogo = categoriaDoJogoPergunta;

const quantidadeDeIngressosPergunta = prompt("Quantos ingressos você quer comprar?");
const quantidadeDeIngressos = quantidadeDeIngressosPergunta;

const valorReal = 1
const valorDolar = 4.1

if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 4) {
 const resultado = quantidadeDeIgressos * 170;
 console.log(resultado);
 } else {
  if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 4) {
   const resultadoDois = quantidadeDeIngressos * 220;
   console.log(resultadoDois);
  } else {
   if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDoJogo === 4) {
    const resultadoTres = quantidadeDeIgressos * 330;
    console.log(resultadoTres);
    } else {
     if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 3) {
      const resultadoQuatro = quantidadeDeIngressos * 330;
      console.log(resultadoQuatro);
      } else {
       if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 2) {
        const resultadoCinco = quantidadeDeIngressos * 440;
        console.log(resultadoCinco);
       } else {
        if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 1) {
         const resultadoSeis = quantidadeDeIgressos *660;
         console.log(resultadoSeis);
        } else {
         if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 3) {
          const resultadoSete = quantidadeDeIngressos * 550;
          console.log(resultadoSete);
         } else {
          if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 2) {
           const resultadoOito = quantidadeDeIgressos * 880;
           console.log(resultadoOito);
          } else {
           if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 1) {
            const resultadoNove = quantidadeDeIngressos * 1320;
            console.log(resultadoNove);
           } else {
            if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 4) {
             const resultadoDez = (quantidadeDeIngressos * 170) * 4.1;
            console.log(resultadoDez);
            } else {
            if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 4) {
             const resultadoOnze = (quantidadeDeIngressos * 220) * 4.1;
             console.log(resultadoOnze);
           } else {
             if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDoJogo === 4) {
               const resultadoDoze = (quantidadeDeIngressos * 330) * 4.1;
              console.log(resultadoDoze);
            } else {
             if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 3) {
             const resultadoTreze = (quantidadeDeIngressos * 330) * 4.1;
             console.log(resultadoTreze);
            } else {
              if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 2) {
               const resultadoCatorze = (quantidadeDeIngressos * 440) * 4.1;
               console.log(resultadoCatorze);
              } else {
               if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 1) {
               const resultadoQuinze = (quantidadeDeIngressos * 660) * 4.1;
               console.log(resultadoQuinze);
              } else {
               if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 3) {
                 const resultadoDezesseis = (quantidadeDeIngressos * 5500) * 4.1;
                 console.log(resultadoDezesseis);
                } else {
                 if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 2) {
                 const resultadoDezessete = (quantidadeDeIngressos * 880) * 4.1;
                 console.log(resultadoDezessete);
                } else {
                 if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 1) {
                 const resultadoDezoito = (quantidadeDeIngressos * 1320) * 4.1;
                 console.log(resultadoDezoito);
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
        }
      }
    }
  }
}
  }
}