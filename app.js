
function resultado() {

    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    var nota4 = document.getElementById("nota4");


    if(nota1.value == "" && nota2.value == "" && nota3.value == "" && nota4.value == "") {
        alert("Ambos campos não estão prenchidos!");
    }

    else if(nota1.value == ""){
        alert("1ª Nota não prenchida!");
    }

    else if(nota2.value == ""){
        alert("2ª Nota não prenchida!");
    }

    else if(nota3.value == ""){
        alert("3ª Nota não prenchida!");
    }

    else if(nota4.value == ""){
        alert("4ª Nota não prenchida!");
    }


    n1 = parseFloat(nota1.value);
    n2 = parseFloat(nota2.value);
    n3 = parseFloat(nota3.value);
    n4 = parseFloat(nota4.value);

    var resp = document.getElementById("res");

    var media = (n1 + n2 + n3 + n4) / 4;

    resp.innerHTML = media;

}