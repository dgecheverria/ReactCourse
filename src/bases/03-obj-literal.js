const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 34,
    direccion:{
        ciudad: 'NY',
        zipcode: 121212,
        latitud: 14.2332,
        lng: 43.223
    }
};


//console.table({persona});

//console.log(persona); 

const persona2 = { ...persona};
persona2.nombre = 'Peter';


console.log(persona); 

console.log(persona2);