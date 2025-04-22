import heroes  from '../data/heroes'
//import { heroes } from "./data/heroes";

//import heroes, { owners } from "./data/heroes";



//console.log(heroes);

/*const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id );
}*/

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id );

//console.log(getHeroeById(2));


//Using filter // Find solo devuelve 1 elemento
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner );

//console.log(getHeroeByOwner('DC'));


// Parte 2

//console.log(owners)
