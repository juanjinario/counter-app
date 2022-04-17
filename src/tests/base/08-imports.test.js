import { getHeroeById, getHerosByOwner } from "../../base/08-imports";
import { heroes } from "../../data/heroes";

describe('08-imports testing', () => { 
    test('getHeroeById should return an object heroe with an existing id', () => {
        const id = 1;
        const expectedHero = heroes.find(hero => hero.id === id);
        const hero = getHeroeById(id);
        expect(hero).toEqual(expectedHero);
        expect(typeof hero).toBe('object');
     });

     test('getHeroeById should return undefined with a nonexistent id', () => {
        const id = 18;
        const hero = getHeroeById(id);
        expect(typeof hero).toBe('undefined');
        expect(hero).toBe(undefined);
     });

     test('getHerosByOwner should return an array filtered by DC owner', () => {
        const owner = 'DC';
        const expectedHeros = heroes.filter(hero => hero.owner === owner);
        const hero = getHerosByOwner(owner);
        expect(hero).toEqual(expectedHeros);
     });

     test('getHerosByOwner should return an array filtered by Marvel owner (length == 2)', () => {
        const owner = 'Marvel';
        const expectedHeros = heroes.filter(hero => hero.owner === owner);
        const length = 2;
        const heros = getHerosByOwner(owner);
        expect(heros).toEqual(expectedHeros);
        expect(heros.length).toBe(length);
     });
 });