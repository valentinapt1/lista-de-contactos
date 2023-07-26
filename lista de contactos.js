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

function agregarContactos(id, Nombres, Apellidos, Telefono, ciudad, direccion){
    let lista = {
        id: id,
        Nombres: Nombres,
        Apellidos: Apellidos,
        Telefono: Telefono,
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
    //creo funcion de agregar contactos

 console.log (contactos);
 contactos.unshift({
    lista:id=5, Nombres: "Carmen", Apellidos: "Cruz", Telefono: 35296456, ciudad: "Neiva", direccion: "av cali",
 });

console.log(contactos);

const nuevoLenghtUnshift= contactos.unshift(
    {id:4, Nombres:"Luz", Apellidos: "Baron", Telefono: 3604879, ciudad: "bogota", direccion: "av boyaca"},

);
console.log(contactos);
console.log(nuevoLenghtUnshift);

//Modifico contacto

const eliminados = contactos.splice(0,2,
    {id:6, nombre: "Lina", apellido: "Sanchez", Telefono:789515232, ciudad:"cartagena", direccion: "tv 50 #99-40"
    });
    console.log("Eliminado:", eliminados);
    console.log(contactos);

    //creo funcion de eliminar contacto 

console.log(contactos);
contactos.pop();
console.log(contactos);
const eliminado = contactos.pop();
console.log("Eliminado:", eliminado);
console.log(contactos);
