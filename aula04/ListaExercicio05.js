function contarLetra(Palavra, Letra) {
    let Contador = 0;
    
    for (let i = 0; i < Palavra.length; i++) {
    
        if (Palavra[i] === Letra) {
            Contador++;
        }
    }
    
    return Contador;
}

let Palavra = window.prompt("diga uma palavra:");
let Letra = window.prompt("diga uma letra:");

window.alert(`A letra '${Letra}' aparece ${contarLetra(Palavra, Letra)} vezes na palavra '${Palavra}'.`);