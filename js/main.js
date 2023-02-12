const form = document.getElementById('forms');
const numeroUm = document.getElementById('input-1');
const numeroDois = document.getElementById('input-2');
const visual = document.querySelector('.ver')
const mensagemDeSucesso = document.querySelector('.mensagem-de-sucesso')
const mensagemDeErro = document.querySelector('.mensagem-de-erro')
let formValido = false
function validaNumero(um,dois){
        return parseFloat (dois) > parseFloat(um);
    }


    form.addEventListener('submit', function(e){
            e.preventDefault();
            formValido = validaNumero(numeroUm.value,numeroDois.value)
            const mensagemSucesso = `Formulário enviado com sucesso`
            const mensagemError = `Por favor digite um numero mais alto que ${numeroUm.value} no segundo numero`

        if(formValido){        
            mensagemDeSucesso.innerHTML=mensagemSucesso
            mensagemDeSucesso.style.display='block'
            mensagemDeSucesso.style.margin='0px'
            mensagemDeErro.style.display='none'
            numeroUm.value = ''
            numeroDois.value = ''   
            visual.style.display='none' 
        }
        else{   
            mensagemDeErro.innerHTML=mensagemError
            mensagemDeErro.style.display='block'
            mensagemDeSucesso.style.display='none'   
        }

    })

