
let x = parseInt(prompt("Digite um número:"));

let soma = 0;

for (let i = 1; i <= x; i++) {
    soma += i;
}

console.log(`A soma dos números de 1 até ${x} é: ${soma}`);
