//cree objeto de contactos
function agregarContacto(id, nombres,apellidos,celular,email,direccion,ciudad){
let contactos= {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    celular: celular,
    email: email,
    ubicacion: {
        direccion:direccion,
        ciudad: ciudad,
    }

    };
    listaDeContactos.push(contactos);
}

//creo un objeto
let listaDeContactos= []

//empiezo a agregar contactos

agregarContacto("0", "pati", "cross", "23658742", "valentinapedrozatgmail.com", "cll 120b cra30", "bogota");
agregarContacto("1", "yovanni", "torres", "30035020", "yovannitorres@gmail.com", "cra20 #50-60", "carttagena");
agregarContacto("2", "liseth", "chaparro", "32059061", "liseth191@gmail.com", "tv91 con 60", "barranquilla");
agregarContacto("3", "tania", "far", "685455145", "baby89@gmail.com", "50 con 30", "santa marta");
console.log(listaDeContactos)