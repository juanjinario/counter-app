import { getArray } from "../../base/07-array-destructuring";

describe('Test in 07-array-destructuring', () => { 
    test('should return a array with a string and number', () => { 
        const expectedArray = ['AABVV', 111];
        const myArray = getArray();
        const [ firstItem, secondItem ] = myArray;
        expect(myArray).toEqual(expectedArray);
        expect(typeof firstItem).toBe('string');
        expect(typeof secondItem).toBe('number');
     })
});