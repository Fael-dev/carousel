/*
    Pega todos os elementos li da lista não ordenada
    retornando um objeto NodeList, 
    de acordo com posicionamento encontrado
    no documento
 
*/
var sliders  = document.querySelectorAll('#sliders li');
/*
 Define o indice, que será responsavel 
 por informar os slider atual
 */
var currentPositionSlide  = 0;
/*
 Retorna a último posição do slide.
 Diminui menos 1, devido o primeiro
 item começa com zero. 
 Se temos 2 items, sua posição:
 0,1,2
*/
var endPositionSlide    = sliders.length - 1;
/*
  Executaremos uma função num intervalo de tempo.
  E defiremos que executará em 2000 milesegundos
*/
window.setInterval(function(){
    /*
     a variavel index será responsável pela
     posição do elemento que iremos remover a classe
    */
    var lastPositionSlide =  currentPositionSlide  ? currentPositionSlide  - 1 : endPositionSlide;
    /*Pega o elemento pra remover a classe*/
    sliders[lastPositionSlide].className  = '';
    /*Adiciona a classe no elemento atual*/
    sliders[currentPositionSlide].className  = 'slider-active';
    /*Calcular a posição do próximo elemento que será exibido*/
    currentPositionSlide= currentPositionSlide >= endPositionSlide? 0 : currentPositionSlide+1;  
}, 2000);