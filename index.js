


// comando para exibir um alerta
// alert('estou conectado!')


// comando para adicionar um texto h1 ao documento html
//document.write('<h1 id="t1">Hello Word</h1>');

// comando para adicionar um texto h1 ao documento html
//document.write('<h1>Hello</h1>');

// especiona a class container dentro do html e adiciona um texto h1 dentro dessa div
//document.getElementById('container').innerHTML += '<h1>Hello 5</h1>';



// JEITO SIMPLES
// especiona o id container e adiciona botão chamado click-me no documento html
document.querySelector('#container').innerHTML += '<button id="btn1" class="envio">Clique-me</button>';
// tendo atribuido um id ao botão, com o metodo onclick foi chamado uma função alert "olá mundo"
document.querySelector('#btn1').onclick = function(){
    alert("ola mundo");
};

// é atribuido o metodo onmouseover ao botão, quando passa o mouse surge um alerta
// document.querySelector('#btn1').onmouseover = function(){
    // alert('passou o mouse');
// };

// se sair da pagina surge um alerta
// window.addEventListener('mouseout', function(){
    // alert('nao saia da pagina');
// });



//JEITO NÃO TÃO SIMPLE
// cria uma variavel e cria outro <button> dentro do html
let button = document.createElement('button');
//adiciona uma label ao botão na variavel
button.innerText = 'Outro Botão';
//adiciona um id para o botão chamado id=btn2
button.setAttribute('id', 'btn2')
//adiciona a class envio ao botão btn2
button.classList.add('envio');
//adiciona um evento click com a função ao btn2
button.addEventListener('click', function(){
    alert('clicou no botao 2')
});

//indica que o botão tem que fica abaixo
document.querySelector('#container').append(button);

// document.querySelector('#nome').onkeyup = function(){
//     let valor = document.querySelector('#nome').value; 
//     document.querySelector('#resultado').innerHTML = valor;
// };


//JEITO QUE ESCREVE MENOS
nome.onkeyup = () => {
    alert(`Seja bem vindo(a) ${nome.value}`);
}
