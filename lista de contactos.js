//cree objeto de contacto
let contactos= [
    {
        id:0,
        Nombres: "Yovanni",
        Apellidos: "Pedroza",
        Telefono: 3003815059,
        Ubicacion:{
            ciudad: "Bogota",
            direccion: "aures 1"
        }
     }    
]

//agrego funcion

function agregarContactos(id, Nombres, Apellidos, Telefono, Ubicacion, ciudad, direccion){
    let lista = {
        id: id,
        Nombres: Nombres,
        Apellidos: Apellidos,
        Telefono: Telefono,
        Ubicacion: Ubicacion,
        ciudad: ciudad,
        direccion: direccion,
    }

    contactos.push(lista);
    console.log(contactos);
}

    //agrego contactos a la lista

    agregarContactos("1", "Nilsa", "Torres", 3196498869, "Bogota", "aures1");
    agregarContactos("2", "Valeria", "Osorio", 300200100, "Bogota", "cali");
    agregarContactos("3", "Valentina", "Vasquez", 320300650, "Bogota", "andes");

    //imprimo la lista de contactos

    function ImprimirContactos(lista){
    console.log(ImprimirContactos);
    }
    //creo funcion de eliminar contactos

    let EliminarConatcto = contactos.slice(0, 2);
    console.log(EliminarConatcto);{}