// Desestrucutracion

// Asignacion Desectructurante

const persona = {
    nombre: 'Diegot',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);


const useContext = ({ nombre, edad, clave}) => {
  //  const { nombre, edad, clave } = persona;
   // console.log(nombre, edad, clave);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.3434,
            lng: -10.334
        }
    }
}

const avenger = useContext(persona);

console.log(avenger);

const {nombreClave, anios, latlng:{lat, lng}} = avenger;


console.log(nombreClave, anios);
console.log(lat, lng);