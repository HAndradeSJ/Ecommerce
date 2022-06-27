// função do menu
function menu(){
    document.getElementById('menu').style.width = '250px';   
}
function menu1(){
    document.getElementById('menu').style.width = '0px';
}
// função de login
function login(){
    document.getElementById('login').style.width = '15vw'
}
function login1(){
    document.getElementById('login').style.width ='0px';
}
// função do carrinho
function carrinho(){
    document.getElementById('carrinho').style.width = '23vw'; 
}
function carrinhof(){
    document.getElementById('carrinho').style.width = '0vw';
}
// função dos botões p
function botão(bt){

    var x ='bot'+bt
    var color =document.getElementById(x).style.backgroundColor;
    if (color == 'black'){
        document.getElementById(x).style.backgroundColor = 'white';
    document.getElementById(x).style.color = 'black';
    }
    else{   
        document.getElementById(x).style.backgroundColor = 'black';
    document.getElementById(x).style.color = 'white';
    }
}
// função do carrinho
function carrinho1(){
    document.getElementById('carrinho1').innerHTML="Moletom Canguro Basic Vermelho";

}

// redirecionamento da pagina
function most1(){
    window.location.href= "http://127.0.0.1:5500/most1.html";
}
