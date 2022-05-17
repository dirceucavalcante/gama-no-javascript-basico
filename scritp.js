console.log('javascript carregado');

function validaCPF (cpf){
    if (cpf.length != 11){
        return false;
    }
    else{
       let numeros = cpf.substring(0,9);
       let digitos = cpf.substring(9);
        console.log(`Numero do CPF: ${numeros}-${digitos}`);
        
        // Validação do primeiro dígito//
        let soma = 0;
        for (let i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);      
        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(0)){
            return false;
        } 

        //validação do segundo dígito//
        soma = 0;
        numeros = cpf.substring(0,10);

        for (let k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }
        console.log(soma);
        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);
        if (resultado != digitos.charAt(1)){
            return false;
        } 

        return true;
    }
}

function validacao (){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    console.log('início da validação');
    let cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    const resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        document.getElementById('success').style.display = 'block';
    }
    else{
        document.getElementById('error').style.display = 'block';
    }
}

