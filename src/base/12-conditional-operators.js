const active = true;
// let message = ``;
// if (active) {
//     message = 'active';
// } else {
//     message = 'no active'
// }

// let message = active ? 'active' : 'no active';

let message = active && 'El mensaje que quiero';

console.log(message);


// Nulling coallasing
let message2 = null ?? 'Default message for null or undefined';

console.log(message2);



// Default value
let message3 = 0 || 'Default message 3 for empty text or 0 or null or undefined';

console.log(message3);