// functions

// function greeting(name)  {
//     return `Hola, ${name}`
// };

// It is better create functions with constants
const greeting = function (name)  {
    return `Hola, ${name}`
};

const greeting2 = (name) => {
    return `Hola, ${name}`
};

const greeting3 = (name) => `Hola, ${name}`;
const greeting4 = () => `Hola, mundo`;


export const getUser = () => (
    {
        id: 1,
        usernmae: 'papi01',
    }
);


export const getActiveUser = (name) => ({
    uuid: 'aabc321',
    username: name,
});

const activeUser = getActiveUser('peter');

