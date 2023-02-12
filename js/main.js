const form = document.getElementById('forms');
const numeroUm = document.getElementById('input-1');
const numeroDois = document.getElementById('input-2');
const mensagemDeSucesso = document.querySelector('.mensagem-de-sucesso')
const mensagemDeErro = document.querySelector('.mensagem-de-erro')
let formValido = false
function validaNumero(um,dois){
        return parseFloat (dois) > parseFloat(um);
    }


    form.addEventListener('submit', function(e){
            e.preventDefault();
            formValido = validaNumero(numeroUm.value,numeroDois.value)
            const mensagemSucesso = `${numeroDois.value} é maior que ${numeroUm.value}`
            const mensagemError = `${numeroDois.value} não é maior que ${numeroUm.value}`

        if(formValido){        
            mensagemDeSucesso.innerHTML=mensagemSucesso
            mensagemDeSucesso.style.display='block'
            mensagemDeErro.style.display='none'
            numeroUm.value = ''
            numeroDois.value = ''
            
            
        }
        else{   
            mensagemDeErro.innerHTML=mensagemError
            mensagemDeErro.style.display='block'
            mensagemDeSucesso.style.display='none'
            numeroUm.value = ''
            numeroDois.value = ''           
        }

    })

