let perfil = "administradordfgdfg";


    if(perfil === " "){
        console.log("Debe especificar el perfil del usuario");

    }else if(perfil === ("administrador" || "ADMINISTRADOR"  || "Administrador")){
        console.log("Usted tiene todos los privilegios de uso del sistema");

    }else if (perfil == ("asistente" || "ASISTENTE"|| "Asistente")){
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    
    }else if(perfil == ("invitedo" || "Invitado" || "INVITADO")){
        console.log("Usted sólo tiene permisos de consultar datos");
    }else {
        console.log("Debe especificar un perfil válido");
    }
        