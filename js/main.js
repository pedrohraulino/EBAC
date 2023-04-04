$(document).ready(function(){
    $('.carrinho').click(function(){
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')

    $('#CEP').mask('00.000-000')

    $('#cartao').mask('0000 0000 0000 0000')

    $('#CVV').mask('000')

    $('#validade').mask('00/00')

    $('#voltarInicio').click(function(){
        $('#pagamento').slideToggle();
        $('#mensagemSucesso').slideToggle();
        $('.carrinho').slideToggle();
    })

    $('form').validate({
        rules: {
            nome: {
                required:true,
            },
            sobrenome: {
                required:true,
            },
            cpf: {
                required:true,
            },
            telefone: {
                required:true,
            },
            email: {
                required:true,
            },
            rua: {
                required:true,
            },
            numeroCasa: {
                required:true,
            },
            CEP: {
                required:true,
            },
            cidade: {
                required:true,
            },
            bairro: {
                required:true,
            },
            complemento: {
                required:true,
            },
            nomeCartao: {
                required:true,
            },
            cartao: {
                required:true,
            },
            CVV: {
                required:true,
            },
            valiadde: {
                required:true,
            },
            parcerlas:{
                required:true,
            }
        }, 
        messages: {
            nome: 'campo obrigatório',
            sobrenome:'campo obrigatório',
            cpf:'campo obrigatório',
            telefone: 'campo obrigatório',
            email: 'campo obrigatório',
            rua:'campo obrigatório',
            numeroCasa: 'campo obrigatório',
            CEP: 'campo obrigatório',
            cidade: 'campo obrigatório',
            bairro: 'campo obrigatório',
            complemento: 'campo obrigatório',
            nomeCartao: 'campo obrigatório',
            cartao: 'campo obrigatório',
            CVV:'campo obrigatório',
            valiadde: 'campo obrigatório',
        },
        submitHandler: function(form) {
            $('#pagamento').slideToggle();
            $('#mensagemSucesso').slideToggle();
            $('.carrinho').slideToggle();
        }
    })
    
});
