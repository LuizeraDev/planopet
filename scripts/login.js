$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

 function entrar(){
    var convenio = document.getElementById("tipoconta1"); 
    var clinica = document.getElementById("tipoconta2"); 

    if(convenio.checked == true)
        window.location.href = "../pages/homeConvenio.html";
    if(clinica.checked == true)
        window.location.href = "../pages/homeClinica.html";
    else if(convenio.unchecked && clinica.unchecked)
        alert("Por favor, escolha um tipo e conta.");
 }

