// Vars & constants
const name = 'Fernando';
const lastname = 'Caldera';
const completeName = `${name} ${lastname}`;

// Respect the white spaces
const greeting = ` webazco   `;
// console.log(greeting);

const things = ` 
Hola
2   
`;
// console.log(things);

export const getGreeting = (name = 'Carlos') => {
    return `Hi ${name}!`;
} 
// console.log(`${getGreeting('webo')}`);