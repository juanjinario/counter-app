// Array Destructuring - Asignación destructurante
const characters = ['Goku', 'Vegeta', 'Trunks'];
const [person1, ...args] = characters;
// console.log(person1);
const [,,person3] = characters;
// console.log(person3);

export const getArray = () => {
    return ['AABVV', 111];
};

const [ string1, string2, number1 ] = getArray();


// return a function inside a array
const getArray2 = (value) => {
    return [ value, ()=>{ console.log(value )} ];
}
const [ name, greetingName ] = getArray2('HJuanjo');
greetingName();