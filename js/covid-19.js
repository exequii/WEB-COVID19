var regexTelefono=/^[0-9]{4}[-]{1}[0-9]{4}$/;
var regexNombreApellido=/^[a-z+A-Z]+ [a-z+A-Z]+$/;
var regexDni=/^[0-9]{1,8}$/;
var contadorSintomas=0;
var error = false;
var mensajesError = "";
var sintomasIncompletos=0;


/************ FUNCION GENERICA PARA CHEQUEAR LOS SINTOMAS, LA INVOCO DENTRO DE FUNCION VALIDAR ******** */
function chequeoRadio(radio){
    var opciones=document.getElementsByName(radio);
    var seleccion=false;


    for(i in opciones){
        if(opciones[i].checked){
            seleccion=true;
            if(opciones[i].value=="si"){
                contadorSintomas++;
            }
        }
    }

    if(seleccion==false){
        /*error = true;*/
        sintomasIncompletos++;
        document.getElementById(radio).style.color="red";
    }
    else{
        document.getElementById(radio).style.color="green";
    }    
}

    /********* FUNCION VALIDAR SE REALIZA CUANDO ENVIO EL FORMULARIO ************ */

function validar(radio1,radio2,radio3,radio4,radio5){
    
    mensajesError = "";
    contadorSintomas=0;
    sintomasIncompletos=0;
    error = false;

    document.getElementById("mensaje").style.color="red"; 
    // Hago esto por si el usuario vuelve a modificar un dato y envia nuevamente sin refrescar
    //, para que inicie el mensaje en rojo,ya que si aparece es por error y debe ser rojo, si valida pasa a verde.

    if(!regexNombreApellido.test(document.getElementById("nombre-apellido").value)){
        error = true;
        mensajesError+="<p>Nombre y Apellido Invalido.</p>"; 
        document.getElementById("nombre-apellido").style.border="2px solid crimson";
       
    }
    else{
            document.getElementById("nombre-apellido").style.border="2px solid greenyellow";
        }

    /************************************************************************************* */

    if(!regexDni.test(document.getElementById("dni").value)){
        error = true;
        mensajesError+="<p>DNI Invalido.</p>"; 
        document.getElementById("dni").style.border="2px solid crimson";
       
    }
    else{
            document.getElementById("dni").style.border="2px solid greenyellow";
        }

    /************************************************************************************* */

    if(!regexTelefono.test(document.getElementById("tel").value)){
            error=true;
            mensajesError+="<p>Telefono Invalido.</p>";
            document.getElementById("tel").style.border="2px solid crimson";
           
    }
    else{
            document.getElementById("tel").style.border="2px solid greenyellow";
    }

    /************************************************************************************ */

    if(document.getElementById("ciudad").value==''){
        error = true;
        mensajesError+="<p>Ciudad Invalida.</p>";
        document.getElementById("ciudad").style.border="2px solid crimson";
       
    }

    else{
            document.getElementById("ciudad").style.border="2px solid greenyellow";
    }

    /************************************************************************************ */
    
    var opciones= document.getElementsByName("sexo"); //devuelve un ARRAY
    var seleccionado = false;
    for(i in opciones){  //recorro el array para ver ambas opciones del sexo
        if(opciones[i].checked){
            seleccionado = true;
        }
    }
    

    if(seleccionado!=true){ //chequeo con la variable si se selecciono algo o no y muestro el mensaje.
        error = true;
        mensajesError+="<p> El campo sexo esta incompleto. </p>";
        document.getElementById("sexocolor").style.color="red";
    }
    else{
        document.getElementById("sexocolor").style.color="green";
    }

    /********************************************************************************* */

    opciones= document.getElementsByName("viaje"); //devuelve un ARRAY
    seleccionado = false;
    for(i in opciones){  //recorro el array para ver ambas opciones del viaje
        if(opciones[i].checked){
            seleccionado = true;
        }
    }

    if(seleccionado!=true){ //chequeo con la variable si se selecciono algo o no y muestro el mensaje.
        error = true;
        mensajesError+="<p> Indique si viajo al exterior. </p>";
        document.getElementById("viajepais").style.color="red";
    }
    else{
        document.getElementById("viajepais").style.color="green";
    }

    /******************************************************************************** */
    if(document.getElementById("travel").checked){
    var seleccionado2 = false;
    if(document.getElementById("paises").value=="0"){
        seleccionado2=true;
    }

    if(seleccionado2!=true){ //chequeo con la variable si se selecciono algo o no y muestro el mensaje.
        error = true;
        mensajesError+="<p> Indique a que pais viajo. </p>";
        document.getElementById("divpaises").style.color="red";
    }
    else{
        document.getElementById("divpaises").style.color="green";
    }
}

    /************** INVOCO METODO PARA CHEQUEAR CADA UNO DE LOS SINTOMAS ************* */

    chequeoRadio(radio1);
    chequeoRadio(radio2);
    chequeoRadio(radio3);
    chequeoRadio(radio4);
    chequeoRadio(radio5);
    
    /************* DIRECCION Y CIUDAD LA DEBERIA VALIDAR SOLO SI TUVO DIFICULTAD PARA RESPIRAR ************* */

    if(document.getElementById("difrespirar").checked){

        if(document.getElementById("direccion").value==''){
            error = true;
            mensajesError+="<p>Direccion Invalida.</p>";
            document.getElementById("direccion").style.border="2px solid crimson";
       
        }
        else{
            document.getElementById("direccion").style.border="2px solid greenyellow";
        }


        if(document.getElementById("ciudad-actual").value==''){
            error = true;
            mensajesError+="<p>Ciudad Actual Invalida.</p>";
            document.getElementById("ciudad-actual").style.border="2px solid crimson";
        }
        else{
            document.getElementById("ciudad-actual").style.border="2px solid greenyellow";
        }
    }

    /*
    else{
        document.getElementById("ciudad-actual").style.border="2px solid crimson";
        document.getElementById("direccion").style.border="2px solid crimson";
    }
    */

    /********************************************************************************************* */

    if(error){
        /*mensajesError+="<p> Tiene " + sintomasIncompletos +" campos de sintomas incompletos.</p>";*/
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;

    }else{
        document.getElementById("mensaje").style.color="green";
        mensajesError+="<p>El formulario fue enviado correctamente.</p>";
        mensajesError+="<p> Tiene " + sintomasIncompletos +" campos de sintomas incompletos.</p>";
        mensajesError+= "<p>" + contadorSintomas + " sintomas de COVID-19 fueron registrados.</p>";
        document.getElementById("mensaje").innerHTML=mensajesError;
        //return true; con el true me abre el mail
        return false
    }
}


/********************* FUNCION DISEÑADA PARA SER GENERICA PARA MOSTRAR U OCULTAR ************************** */
function mostrar(nombreRadio,nombreSelect,nombreSelect2){
    var opciones=document.getElementsByName(nombreRadio);

    for(i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById(nombreSelect).style.display="";
            document.getElementById(nombreSelect2).style.display="";
        }
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById(nombreSelect).style.display="none";
            document.getElementById(nombreSelect2).style.display="none";

        }
    }
}

function mostrar1(nombreRadio,nombreSelect){
    var opciones=document.getElementsByName(nombreRadio);

    for(i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById(nombreSelect).style.display="";
            
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById(nombreSelect).style.display="none";
        }
    }
}
}
