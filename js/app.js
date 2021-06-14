const nome = window.prompt('De quem é o aniversário?');
const idade = window.prompt('Quantos anos esta fazendo?');

const frase = `<h2>Feliz Aniversário, ${nome} !!</h2>`;

document.querySelector(".title").innerHTML = frase;
document.querySelector(".bolo h3").innerHTML = idade;