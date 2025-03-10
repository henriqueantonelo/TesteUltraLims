/* 
5. Simulação de Saque em Caixa Eletrônico
Implemente um programa que receba um valor monetário inteiro e retorne a quantidade
mínima de notas e moedas necessárias para compor esse valor. O programa deve sempre
priorizar as notas de maior valor primeiro.
Notas e moedas disponíveis:
● Notas: 100, 50, 20, 10, 5, 2
● Moedas: 1
Regras:
● O valor sempre será inteiro e positivo.
● Deve-se minimizar a quantidade de cédulas e moedas utilizadas.
Exemplo de entrada:
valor = 130
Exemplo de saída:
1 nota de 100
1 nota de 20
1 nota de 10
*/

function calculateWithdrawal(amount) {
    const denominations = [100, 50, 20, 10, 5, 2, 1];
    let result = [];
  
    for (let i = 0; i < denominations.length; i++) {
      let quantity = Math.floor(amount / denominations[i]);
      if (quantity > 0) {
        let type = denominations[i] >= 2 ? "Nota" : "Moeda";
        result.push(`${quantity} ${type}(s) de ${denominations[i]}`);
        amount -= quantity * denominations[i];
      }
    }
  
    return result.join("\n");
  }
  
  let amount = 130;
  console.log(calculateWithdrawal(amount));

  