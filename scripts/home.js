document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    
});

function setTela(tela) {
    switch(tela) {
        case 1: 
            $("#consulta").attr('class', 'dashboard center hoverable ativo');
            $("#historico").attr('class', 'dashboard center hoverable');
            $("#mensagens").attr('class', 'dashboard center hoverable');
            $("#planos").attr('class', 'dashboard center hoverable');

            $("#consultasTela").show();
            $("#mensagensTela").hide();
            $("#historicoTela").hide();
            $("#planosTela").hide();
            break;
        case 2:
            $("#consulta").attr('class', 'dashboard center hoverable');
            $("#historico").attr('class', 'dashboard center hoverable ativo');
            $("#mensagens").attr('class', 'dashboard center hoverable');
            $("#planos").attr('class', 'dashboard center hoverable');

            $("#consultasTela").hide();
            $("#mensagensTela").hide();
            $("#historicoTela").show();
            $("#planosTela").hide();
            break;
        case 3:
            $("#consulta").attr('class', 'dashboard center hoverable');
            $("#historico").attr('class', 'dashboard center hoverable');
            $("#mensagens").attr('class', 'dashboard center hoverable ativo');
            $("#planos").attr('class', 'dashboard center hoverable');

            $("#consultasTela").hide();
            $("#mensagensTela").show();
            $("#historicoTela").hide();
            $("#planosTela").hide();
            break;
        case 4: 
            $("#consulta").attr('class', 'dashboard center hoverable');
            $("#historico").attr('class', 'dashboard center hoverable');
            $("#mensagens").attr('class', 'dashboard center hoverable');
            $("#planos").attr('class', 'dashboard center hoverable ativo');

            $("#consultasTela").hide();
            $("#mensagensTela").hide();
            $("#historicoTela").hide();
            $("#planosTela").show();
            break;
        default: 
            $("#consulta").attr('class', 'dashboard center hoverable ativo');
            $("#historico").attr('class', 'dashboard center hoverable');
            $("#mensagens").attr('class', 'dashboard center hoverable');
            $("#planos").attr('class', 'dashboard center hoverable');

            $("#consultasTela").show();
            $("#mensagensTela").hide();
            $("#historicoTela").hide();
            $("#planosTela").hide();
            break;
    }
}