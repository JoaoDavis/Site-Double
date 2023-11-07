document.getElementById("logar").innerHTML = "Logue";
document.getElementsByClassName("insere-barra")[0].placeholder = "Insira seu E-mail";
document.getElementsByClassName("insere-barra")[1].placeholder = "Insira sua senha";

let InsereDados = document.getElementsByClassName('insere-barra')[0];
let InsereDados2 = document.getElementsByClassName('insere-barra')[1];
var tel = document.getElementsByClassName("insere-cadastro")[5].Value;

InsereDados.style.backgroundColor = "transparent";
InsereDados.style.border = 'none';
InsereDados.style.borderBottom = '1px solid white';
InsereDados.style.fontSize = '20px';
InsereDados.style.width = '330px';
InsereDados.style.color = '#ffffff';
InsereDados.style.fontFamily = '"Abel", sans-serif';
InsereDados.style.paddingLeft = '8px';

InsereDados2.style.backgroundColor = "transparent";
InsereDados2.style.border = 'none';
InsereDados2.style.borderBottom = '1px solid white';
InsereDados2.style.fontSize = '20px';
InsereDados2.style.width = '330px';
InsereDados2.style.color = '#ffffff';
InsereDados2.style.fontFamily = '"Abel", sans-serif';
InsereDados2.style.paddingLeft = '8px';

function mascara_tel(tel)
    {
        var tel = document.getElementsByClassName("insere-cadastro")[5].Value;
        console.log(tel);

        tel=tel.slice(0,14);

        console.log(tel);
        document.getElementsByClassName("Insere-cadastro")[5].value.tel;
        tel = document.getElementsByClassName("Insere-cadastro")[5].value.slice(0,10);
        console.log(tel);
    }