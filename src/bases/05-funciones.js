// Funciones en JS

const saludar = function ( nombre ){
    return `Hola, ${ nombre }`
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
}

//Ventaja solo lo que hace es un return

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;


const saludar4 = ( ) => `Hola Mundo`;
//saludar = 30;

console.log(saludar3('vegeta'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC!123',
    username: 'DiehRoot'
});

console.log(getUser());


//Tarea

function getUsuarioActivo(nombre){
    return {
        uid: 'ABC!123',
        username: nombre
    }
};

const usuarioActivo =  getUsuarioActivo('Diegot');

console.log(usuarioActivo); //{uid: 'ABC!123', username: 'Diegot'}

// Sol.

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC!123',
    username: nombre
});

console.log(getUsuarioActivo2('Copal')); //{uid: 'ABC!123', username: 'Copal'}