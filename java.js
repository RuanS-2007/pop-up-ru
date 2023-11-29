const button =document.querySelector("button")
const modal =document .querySelector("dialog")
const buttonClose=document.querySelector("#Fechar")
const buttonCalc=document.querySelector("#calc")

button.onclick= function(){
    modal.showModal()
}
buttonClose.onclick=function (){
    modal.close()
}


function calcular (){

    var nota1=parseFloat(document.getElementById("nota1").value);
    var nota2=parseFloat(document.getElementById("nota2").value);
    var nota3=parseFloat(document.getElementById("nota3").value);

    var soma=nota1+nota2+nota3;
    var media=soma/3;

    document.getElementById("resultado").innerHTML=`
    soma:${soma}
    media:${media}
    `;

}
