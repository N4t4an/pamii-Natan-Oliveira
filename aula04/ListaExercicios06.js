function inverterString(str) {
    return str.split('').reverse().join('');
}

var minhaString = window.prompt("Digite uma palavra:");
var stringInvertida = inverterString(minhaString);

window.alert(stringInvertida);