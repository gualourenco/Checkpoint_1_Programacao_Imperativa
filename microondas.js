const readlineSync = require('readline-sync');
let contador = 0;

console.log('Olá! eu sou um microondas, e gostaria de lhe ajudar a esquentar o prato')
while(contador == 0){
  console.log('Nos temos os seguintes pratos:\n- Piooca\n- Macarrao\n- Carne\n- Feijao\n- Brigadeiro\n ');
  let comida = readlineSync.question('Qual prato voce gostaria de preparar?\n').toLowerCase();
  let segundos = readlineSync.questionInt('E o tempo?\n'); 

  function microondas (prato, tempo){

      if ( //Prato perfeito
        (prato == "pipoca" && tempo == 10) ||
        (prato == "macarrao" && tempo == 8) ||
        (prato == "carne" && tempo == 15) ||
        (prato == "feijao" && tempo == 12) ||
        (prato == "brigadeiro" && tempo == 8)
      ) {
        contador = 1;
        console.log(`Seu prato foi ${prato} e o tempo foi ${tempo}`);
        return `Prato pronto, bom apetite!!!`;

      }else if (
        (prato == "pipoca" && tempo >= 10) ||
        (prato == "macarrao" && tempo >= 8) ||
        (prato == "carne" && tempo >= 15) ||
        (prato == "feijao" && tempo >= 12) ||
        (prato == "brigadeiro" && tempo >= 8)
      ) {
        contador = 1;
        console.log(`Seu prato foi ${prato} e o tempo foi ${tempo}. Esta mais quente que o tempo ideal. Cuidado!`);
        return `Prato pronto, bom apetite!!!`;
      } else if (
        //Prato com tempo insuficiente
        (prato == "pipoca" && tempo < 10) ||
        (prato == "macarrao" && tempo < 8) ||
        (prato == "carne" && tempo < 15) ||
        (prato == "feijao" && tempo < 12) ||
        (prato == "brigadeiro" && tempo < 8)
      ) {
        c = 1;
        console.log(`Tempo de ${tempo} segundos é insuficiente. Seu prato esta frio.`);
        return `Prato pronto, bom apetite!!!`;
      } else if (
        //Prato com dobro do tempo
        (prato == "pipoca" && tempo > 20) ||
        (prato == "macarrao" && tempo > 16) ||
        (prato == "carne" && tempo > 30) ||
        (prato == "feijao" && tempo > 24) ||
        (prato == "brigadeiro" && tempo > 16)
      ) {
        contador = 1;
        console.log(`Seu prato foi ${prato} e o tempo foi ${tempo}`);
        console.log(`Seu ${prato} queimou`);
        return `Prato pronto, bom apetite!!!`;
      } else if (
        //Prato com triplo pra mais
        (prato == "pipoca" && tempo >= 30) ||
        (prato == "macarrao" && tempo >= 24) ||
        (prato == "carne" && tempo >= 45) ||
        (prato == "feijao" && tempo >= 36) ||
        (prato == "brigadeiro" && tempo >= 24)
      ) {
        contador = 1;
        console.log(`Seu prato foi ${prato} e o tempo foi ${tempo}`);
        console.log(`KABUUUUMMMMM!!!!`);
        return `Prato pronto, bom apetite!!!`;
      } else {
        contador = 0;
        console.log("Prato inexistente");
        return `Adcione um novo prato e tempo`;
      }
  }
  
  console.log(microondas(comida, segundos))
  
}
