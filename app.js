
function resultado() {

    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    var nota4 = document.getElementById("nota4");


    if(nota1.value == "" || nota2.value == "" || nota3.value == "" || nota4.value == "") {
        alert("Nenhum campo preenchido!");
    }

    else if(nota2.value == ""){
        alert("a");
    }

    else if(nota3.value == ""){
        alert("a");
    }

    else if(nota4.value == ""){
        alert("a");
    }

}