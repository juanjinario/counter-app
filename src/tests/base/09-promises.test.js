import { getHeroeByIdAsync } from "../../base/09-promises";
import { heroes } from "../../data/heroes";

describe("09-promises testing", () => {
   test("getHeroeByIdAsync should return an object heroe async with a existing id", (done) => {
      const id = 1;
      const expectedHero = heroes.find(hero => hero.id === id);
      getHeroeByIdAsync(id).then((hero) => {
         expect(hero).toEqual(expectedHero);
         done();
      });
   });

   test("getHeroeByIdAsync should return an message error if find a nonexistent id", (done) => {
      const id = 100;
      const expectedError = 'No se pudo encontrar el héroe'
      getHeroeByIdAsync(id).catch((error) => {
         expect(error).toBe(expectedError);
         done();
      });
   });
});
