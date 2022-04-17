import { getGreeting } from "../../base/02-template-string";
// import @testing-library/jest-dom for helper snippets
import '@testing-library/jest-dom';

describe('Test in 02-template-string', () => { 
    test('getGreeting should return Hi {name} !', () => {
        const name = 'Juanjo';
        const greeting = getGreeting(name);
        expect(greeting).toBe(`Hi ${name}!`);
    });

    test('getGreeting should return default greeting without param name', () => {
        const greeting = getGreeting();
        const defaultName = 'Carlos';
        expect(greeting).toBe(`Hi ${defaultName}!`);
    });
})