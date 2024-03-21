let foto           = document.getElementById('foto');
let titulo         = document.querySelector('.apresentacao_resultado_titulo');
let paragrafo      = document.querySelector('.apresentacao_resultado_paragrafo');
let botao          = document.querySelector('.apresentacao_resultado__botao');
let texto          = document.getElementById('caixa_texto');
let resultadoTexto = document.getElementById('apresentacao_principal_texto'); 

texto.addEventListener("keypress", function(e) {       
    if (texto.value.length > -1) {
        foto.style.visibility = 'hidden';
        titulo.style.visibility = 'hidden';
        paragrafo.style.visibility = 'hidden';
        botao.style.visibility = 'visible';
         
     }      
});

function realizaCriptografia(){
    let textoDigitado        = texto.value;      
    let textoCriptografado   = '';
        resultadoTexto.value = '';    
    for (let i= 0;i < textoDigitado.length;i++){
        textoCriptografado = textoCriptografado + retornaTrocaCriptografia(textoDigitado[i]);        
    }
    resultadoTexto.value =  textoCriptografado;

}

function realizaDescriptografiacriptografia(){
    let textoDescriptografado = resultadoTexto.value;
        textoDescriptografado =  textoDescriptografado.replace('ai','a');
        textoDescriptografado =  textoDescriptografado.replace('enter','e'); 
        textoDescriptografado =  textoDescriptografado.replace('imes','i');
        textoDescriptografado =  textoDescriptografado.replace('ober','o');
        textoDescriptografado =  textoDescriptografado.replace('ufat','u');
        resultadoTexto.value = textoDescriptografado; 
        realizaDescriptografiacriptografia();   
}

function retornaTrocaCriptografia (valor){
    if (valor == 'a'){
        return 'ai';
    } else if (valor == 'e'){
        return 'enter';
    } else if (valor == 'i'){
        return 'imes';
    } else if(valor == 'o'){
        return 'ober';
    } else if (valor == 'u'){
        return 'ufat';
    } else {
        return valor;
    }
}

function CopiaConteudo(){
    navigator.clipboard.writeText(resultadoTexto.value); 
}