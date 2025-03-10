/*
2. Implementação de Algoritmo de Busca Binária
Implemente um algoritmo de busca binária que, dado um número inteiro alvo e uma lista de
números inteiros ordenada de forma crescente, retorne o índice da primeira ocorrência do
número na lista. Caso o número não esteja presente, retorne -1.
Regras:
● O algoritmo deve utilizar a estratégia de busca binária (divisão da lista em partes
menores).
● A entrada será sempre uma lista já ordenada.
Exemplo de entrada:
Lista: [5, 12, 18, 23, 45, 70, 89]
Alvo: 23
Exemplo de saída:
3
*/


function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (list[middle] === target) {
            while (middle > 0 && list[middle - 1] === target) {
                middle--; 
            }
            return middle;
        }
        if (list[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

let list = [5, 12, 18, 23, 45, 70, 89];
let target = 23;
let index = binarySearch(list, target);

console.log(index);
