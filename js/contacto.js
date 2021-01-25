var regexTelefono=/^[0-9]+\-[0-9]{4}$/;
var regexNombreYApellido=/^[a-z+A-Z]+$/;
var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; // el \@ hace que tome el simbolo ese. 
var regexTexto=/^[a-zA-Z]+$/;

function validar(){

    var error=false;
    var mensajesError="";

    if(!regexNombreYApellido.test(document.getElementById("nombreyapellido").value)){
        error=true;
        mensajesError+="<p>Nombre y Apellido Incorrecto</p>";
        document.getElementById("nombreyapellido").style.border="2px solid crimson";
       
    }
    else{
            document.getElementById("nombreyapellido").style.border="2px solid greenyellow";
        }

    if(!regexEmail.test(document.getElementById("email").value)){
        error=true;
        mensajesError+="<p>Email incorrecto</p>";
        document.getElementById("email").style.border="2px solid crimson";
    }
    else{
        document.getElementById("email").style.border="2px solid greenyellow";
    }

    if(!regexTelefono.test(document.getElementById("tel").value)){
        error=true;
        mensajesError+="<p>Numero incorrecto</p>";
        document.getElementById("tel").style.border="2px solid crimson";
    } 
    else{
        document.getElementById("tel").style.border="2px solid greenyellow";
    }
    
    
    if(!regexTexto.test(document.getElementById("texto").value)){
        error=true;
        mensajesError+="<p>Texto incorrecto</p>";
        document.getElementById("texto").style.border="2px solid crimson";
    }
    else{
        document.getElementById("texto").style.border="2px solid greenyellow";
    }
    


    if(error){
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;

    }else{
        mensajesError="";
        document.getElementById("mensaje").innerHTML=mensajesError;
        return true;
        
    }
}

function contador(obj){
    const MAXIMO = 1000;
    var escrito = obj.value.length; //me da el valor en tiempo real del lenght del textarea
    
    if(escrito > MAXIMO){
        document.getElementById("charNum").innerHTML = escrito+' de '+MAXIMO+' caracteres';
        document.getElementById("charNum").style.color="red";
    }else{
        document.getElementById("charNum").innerHTML = escrito+' de '+MAXIMO+' caracteres';
        document.getElementById("charNum").style.color="black";
    }
}