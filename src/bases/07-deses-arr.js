const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;  

console.log(p3);

 const retornaArreglo = () => {
    return ['ABC', 123];
 }

 const [ letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

// Tarea

const useState = (valor) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const arr = useState('Goku');

console.log(arr);

// Sol.

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();