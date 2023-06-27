const form = document.getElementById('form-numeros');

let formValid = false;

function numbervalid (ValorA, ValorB){
    return ValorB > ValorA;
}    

form.addEventListener('submit', function(e){
    e.preventDefault();
    let ValorA = parseFloat(document.getElementById('valor-A').value);
    let ValorB = parseFloat(document.getElementById('valor-B').value);

    const messageSuccess = 'Formulario enviado com sucesso! Verificando: <b> Valor de A </b> menor que <b> Valor de B</B>';
    const containerMessageSuccess = document.querySelector('.success-msg');
    
    formValid = numbervalid(ValorA, ValorB);
    
    if (formValid){
        document.querySelector('.error-msg').style.display = 'none';
        containerMessageSuccess.innerHTML = messageSuccess;
        containerMessageSuccess.style.display = 'block';
        document.querySelector('.error-msg').style.display = 'none';

        ValorA.value = '';
        ValorB.value = '';
    } else {
        document.querySelector('.error-msg').style.display = 'block';
        containerMessageSuccess.style.display = 'none';
    }    
})

