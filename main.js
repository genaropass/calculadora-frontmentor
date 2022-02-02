function del(){
    var value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
    // se va quitando de a un caracter el delete en vez de todo junto como el reset
}


// TEMAS DE CALCULADORA 

// logica: ya tenemos un tema de calculadora por defecto entonces agregamos dos mas
// active1 y active2 cuando pasamos active dos removemos el active2 que seria el tema 3 y 
//agregamos el active1 que seria el tema

var two=document.getElementById('dos');
two.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circle');
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left='36%'; 
})

// aca removemos los dos temas active1 y active2 para que solo aparezca el por defecto
var one=document.getElementById('uno');
one.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='0';
})

// aca inversa a la que hicimos antes con el dos
var three=document.getElementById('tres');
three.addEventListener('click',function(){
    var body=document.querySelector('body');
    var toggle=document.getElementById('circle');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left='65%';
})