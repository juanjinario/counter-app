// Import Export
// import { heroes } from './data/heroes';

import { heroes } from "../data/heroes";
// how rename a default exportation
import heroes2, { owners } from "../data/heroes-default";

// imp + tab shortcut
// write name of the key and wait for recomendations of exportation

export const webo = 2;

// find return the first coincidence
export const getHeroeById = (id) => {
    // return heroes.find(heroe => {
    //     if (heroe.id === id ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
    return heroes2.find(heroe => heroe.id === id);
}

// const getHeroeByOwner = (owner)=> {
//     return heroes.filter(heroe => heroe.owner === owner);
// }

// Filter based in content
export const getHerosByOwner = (owner)=> {
    // return heroes.filter(heroe => heroe.owner.toLocaleLowerCase().includes(owner.toLocaleLowerCase()));
    return heroes.filter(heroe => heroe.owner.indexOf(owner) > -1);
}