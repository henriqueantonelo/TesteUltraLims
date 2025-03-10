/*
3. Cálculo de Números Perfeitos
Um número perfeito é um número inteiro positivo que é igual à soma de todos os seus
divisores positivos, excluindo ele mesmo. Implemente um programa que verifique se um
número dado é perfeito.
Exemplo de entrada:
n = 28
Exemplo de saída:
True
Explicação:
Os divisores de 28 são: 1, 2, 4, 7, 14
Soma: 1 + 2 + 4 + 7 + 14 = 28 → Portanto, 28 é um número perfeito.
*/

function isPerfectNumber(n) {
    let sum = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== 1 && i !== n / i) {
                sum += n / i;
            }
        }
    }

    const isPerfect = sum === n;

    if (isPerfect) {
        console.log(`${n} é um número perfeito.`);
    } else {
        console.log(`${n} não é um número perfeito.`);
    }

    return isPerfect;
}

let n = 28;
let result = isPerfectNumber(n);
console.log(result);
