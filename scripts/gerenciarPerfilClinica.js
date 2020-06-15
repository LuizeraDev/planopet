document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

 
});

function setTela(tela) {
    switch (tela) {
        case 1:
            $("#dadosLink").attr('class', 'collection-item active  light-green darken-4');
            $("#planosLink").attr('class', 'collection-item transparent black-text');
            $("#opcoesLink").attr('class', 'collection-item transparent black-text');

            $("#mobileDados").attr('class', 'light-green darken-4 white-text ativo');
            $("#mobilePlanos").attr('class', '');
            $("#mobileOpcoes").attr('class', '');

            $("#mobileDados").html(`<a class='white-text'>Dados da Clinica</a>`);
            $("#mobilePlanos").html(`<a>Planos Atendidos</a>`);
            $("#mobileOpcoes").html(`<a>Opções Avançadas</a>`);

            $("#dados").show();
            $("#planos").hide();
            $("#planos1").hide();
            $("#opcoes").hide();
            break;
        case 2:
            $("#dadosLink").attr('class', 'collection-item transparent black-text');
            $("#planosLink").attr('class', 'collection-item active light-green darken-4');
            $("#opcoesLink").attr('class', 'collection-item transparent black-text');

            $("#mobileDados").attr('class', '');
            $("#mobilePlanos").attr('class', 'light-green darken-4 white-text ativo');
            $("#mobileOpcoes").attr('class', '');

            $("#mobileDados").html(`<a>Dados da Clinica</a>`);
            $("#mobilePlanos").html(`<a class='white-text'>Planos Atendidos</a>`);
            $("#mobileOpcoes").html(`<a>Opções Avançadas</a>`);

            $("#dados").hide();
            $("#planos").show();
            $("#planos1").show();
            $("#opcoes").hide();
            break;
        case 3:
            $("#dadosLink").attr('class', 'collection-item transparent black-text');
            $("#planosLink").attr('class', 'collection-item transparent black-text');
            $("#opcoesLink").attr('class', 'collection-item active light-green darken-4');

            $("#mobileDados").attr('class', '');
            $("#mobilePlanos").attr('class', '');
            $("#mobileOpcoes").attr('class', 'light-green darken-4 white-text ativo');

            $("#mobileDados").html(`<a>Dados da Clinica</a>`);
            $("#mobilePlanos").html(`<a>Planos Atendidos</a>`);
            $("#mobileOpcoes").html(`<a class='white-text'>Opções Avançadas</a>`);

            $("#dados").hide();
            $("#planos").hide();
            $("#planos1").hide();
            $("#opcoes").show();
            break;
        default:
            $("#dadosLink").attr('class', 'collection-item active  light-green darken-4');
            $("#planosLink").attr('class', 'collection-item transparent black-text');
            $("#opcoesLink").attr('class', 'collection-item transparent black-text');

            $("#mobileDados").attr('class', 'light-green darken-4 white-text ativo');
            $("#mobilePlanos").attr('class', '');
            $("#mobileOpcoes").attr('class', '');

            $("#mobileDados").html(`<a class='white-text'>Dados da Clinica</a>`);
            $("#mobilePlanos").html(`<a>Planos Atendidos</a>`);
            $("#mobileOpcoes").html(`<a>Opções Avançadas</a>`);
            
            $("#dados").show();
            $("#planos").hide();
            $("#planos1").hide();
            $("#opcoes").hide();
            break;
    }
}