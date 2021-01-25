$(document).ready(function(){

    $("#santojanni").click(function(){

        if(($("#informacion1").is(":hidden"))&&($("#informacion2").is(":hidden"))&&($("#informacion3").is(":hidden"))){

        $("#informacion1").fadeIn();
        }
    });

    $("#cerrar1").click(function(){

        $("#informacion1").fadeOut();

    });

    $("#parmenio").click(function(){

        if(($("#informacion1").is(":hidden"))&&($("#informacion2").is(":hidden"))&&($("#informacion3").is(":hidden"))){
        $("#informacion2").fadeIn();
        }
    });

    $("#cerrar2").click(function(){

        $("#informacion2").fadeOut();

    });

    $("#teodoro").click(function(){

        if(($("#informacion1").is(":hidden"))&&($("#informacion2").is(":hidden"))&&($("#informacion3").is(":hidden"))){
        $("#informacion3").fadeIn();
        }
    });

    $("#cerrar3").click(function(){

        $("#informacion3").fadeOut();

    });

});