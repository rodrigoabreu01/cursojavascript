
// alert('estou conectado!')

//document.write('<h1 id="t1">Hello Word</h1>');
//document.write('<h1>Hello</h1>');
//document.getElementById('container').innerHTML += '<h1>Hello 5</h1>';



// JEITO SIMPLES
document.querySelector('#container').innerHTML += '<button id="btn1" class="envio">Clique-me</button>';
document.querySelector('#btn1').onclick = function(){
    alert("ola mundo");
};
// document.querySelector('#btn1').onmouseover = function(){
    // alert('passou o mouse');
// };
// window.addEventListener('mouseout', function(){
    // alert('nao saia da pagina');
// });



//JEITO NÃO TÃO SIMPLE
let button = document.createElement('button');
button.innerText = 'Outro Botão';
button.setAttribute('id', 'btn2')
button.classList.add('envio');
button.addEventListener('click', function(){
    alert('clicou no botao 2')
});
document.querySelector('#container').append(button);

document.querySelector('#nome').onkeyup = function(){
    let valor = document.querySelector('#nome').value; 
    document.querySelector('#resultado').innerHTML = valor;
};
