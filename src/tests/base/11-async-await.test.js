import { getImage } from "../../base/11-async-await";

describe('11-async await testing', () => { 
    // put async for async await testing
    test('getImage should return a image', async () => { 
        const url = await getImage();
        expect(url.includes('https://')).toBe(true);
    });
});
