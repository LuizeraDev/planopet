document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

 
});

function setTela(tela) {
    switch (tela) {
        case 1:
            $("#dadosLink").attr('class', 'collection-item active  light-green darken-4');
            $("#planosLink").attr('class', 'collection-item transparent black-text');
            $("#opcoesLink").attr('class', 'collection-item transparent black-text');

            $("#dados").show();
            $("#planos").hide();
            $("#opcoes").hide();
            break;
        case 2:
            $("#dadosLink").attr('class', 'collection-item transparent black-text');
            $("#planosLink").attr('class', 'collection-item active light-green darken-4');
            $("#opcoesLink").attr('class', 'collection-item transparent black-text');

            $("#dados").hide();
            $("#planos").show();
            $("#opcoes").hide();
            break;
        case 3:
            $("#dadosLink").attr('class', 'collection-item transparent black-text');
            $("#planosLink").attr('class', 'collection-item transparent black-text');
            $("#opcoesLink").attr('class', 'collection-item active light-green darken-4');

            $("#dados").hide();
            $("#planos").hide();
            $("#opcoes").show();
            break;
        default:
            $("#dadosLink").attr('class', 'collection-item active  light-green darken-4');
            $("#planosLink").attr('class', 'collection-item transparent black-text');
            $("#opcoesLink").attr('class', 'collection-item transparent black-text');
            
            $("#dados").show();
            $("#planos").hide();
            $("#opcoes").hide();
            break;
    }
}