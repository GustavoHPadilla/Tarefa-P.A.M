
function resultado() {

    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    var nota4 = document.getElementById("nota4");


    if(nota1.value == "" && nota2.value == "" && nota3.value == "" && nota4.value == "") {
        animacao();
    }

    else if(nota1.value == ""){
        animacao();
    }

    else if(nota2.value == ""){
        animacao();
    }

    else if(nota3.value == ""){
        animacao();
    }

    else if(nota4.value == ""){
        animacao();
    }


    n1 = parseFloat(nota1.value);
    n2 = parseFloat(nota2.value);
    n3 = parseFloat(nota3.value);
    n4 = parseFloat(nota4.value);

    var resp = document.getElementById("res");

    var media = (n1 + n2 + n3 + n4) / 4;

    resp.innerHTML = media;

}




function animacao() {

    var caixa = document.getElementById('caixa');
    var caixa2 = document.querySelector('.centerBox2');

    if(caixa.style.display = 'none') {

        caixa.style.display = 'block';

        caixa.style.animation = "aparecer 2s ease";
        caixa2.style.animation = "desaparecer 1s 5s ease";

        setTimeout(function() {
            
            caixa.style.display = 'none';
        }, 6000);

    }

}