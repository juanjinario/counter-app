// Describe is a title, for agroup tests
describe('test in demo.test.js', () => { 
    test('strings should be equal', () => { 
        // Init
        const message = 'Hola mundo';
        // Stimulus
        const message2 = `Hola mundo`;
        //  Observe
        expect(message).toBe(message2);
    });
})