document.write('<h1>NOVO H1</h1>');
document.querySelector('h1').style.color = 'blue';
document.querySelector('#container2').innerHTML = ('<button class="novo-button">Vermelho</button>');
document.write('<button class="botao-black">black</black>');
document.write('<button class="botao-red">red</black>');
document.querySelector('.novo-button').onclick = function(){
 alert('olá mundo');
}



document.querySelector('.botao-red').onclick = function(){
    document.querySelector('.container3').style.backgroundColor = 'red';
}
document.querySelector('.botao-black').onclick = function(){
    document.querySelector('.container3').style.backgroundColor = 'black';
}