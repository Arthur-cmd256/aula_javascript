function clicou(){
    document.getElementById("agradecimento") .innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Arthur-cmd256/aula_javascript");
    //window.location.href = "https://github.com/Arthur-cmd256/aula_javascript";
}

function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse!"
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1+n2;
}

function setReplace(frase, nome, nome_novo){
    return frase.replace(nome, nome_novo);
}
var validar
function validaIdade(idade){
    validar=0;
    if(idade>=18){
        validar=true;
    }
    else{
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual é sua idade? ")
validaIdade(idade)
console.log(validar);*/

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*var nome="Arthur Nascimento";
var idade=19;
var idade2=10;
var frase="Japão é o melhor time do mundo"
var n1=5;
var n2=3;
//alert("Bem-vindo "+nome+", você tem "+idade+" anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1*n2);*/

/*var lista=["maça", "pêra", "laranja"];
//lista.push("uva"); // Para adicionar um elemento a lista
//lista.pop()//Tira o ultimo elemento da lista
console.log(lista);
console.log(lista.length);
//console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
//console.log(lista[1]);
//alert(lista[1]);*/

/*var fruta = {nome:"maça", cor:"vermelha"};

console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];

console.log(frutas);
alert(frutas[1].nome);*/

/*//var idade=18
var idade=prompt("Qual é a sua idade? ");
if(idade>=18)
{
    alert("Maior de idade");    
}
else{
    alert("Menor de idade");
};*/


/*var count=0 ;
while (count<=5){
    console.log(count);
    alert(count);
    count++;
}*/

/*var count

for(count=0; count<=5; count++){
    alert(count);
}*/

/*var d=new Date()   
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

