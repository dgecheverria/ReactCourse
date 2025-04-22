import { getHeroeById } from "./bases/08-imp-exp";


/*const promesa =  new Promise((resolve, reject)=>{

    setTimeout(() => {
        const p1 = getHeroeById(2);
        resolve(p1);
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe',heroe);
})
.catch(erro => console.warn(err) ); */

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);

            }else{
                reject('No existe Heroe')
            }
        }, 2000);
    });
};

getHeroByIdAsync(4)
.then( console.log )
.catch( console.warn );
//.catch( err => console.log('Error',err));