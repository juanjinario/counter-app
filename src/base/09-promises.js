import { getHeroeById } from "./08-imports";


export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (!heroe) reject('No se pudo encontrar el héroe');
            resolve(heroe);
        }, 1000);
    });
}