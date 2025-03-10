/*
1. Sequência de Fibonacci
Crie um programa que, dado um número inteiro n, retorne os primeiros n números da
sequência de Fibonacci.
Exemplo de entrada:
n = 6
Exemplo de saída:
[0, 1, 1, 2, 3, 5]
*/

function findFibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }

    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    memo[n] = findFibonacci(n - 2, memo) + findFibonacci(n - 1, memo);
    return memo[n];
}

function fibonacciNumbers(n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(findFibonacci(i));
    }
    return ans;
}

let n = 6;
let res = fibonacciNumbers(n);
console.log(res.join(' ')); 