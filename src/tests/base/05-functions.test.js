import { getActiveUser, getUser } from "../../base/05-functions";

describe('Test in 05-funcionts', () => { 
    test('getUser should return a object', () => { 
        const userResult = {
            id: 1,
            usernmae: 'papi01',
        };
        const user = getUser();
        // We can not evaluate objects with === operator
        expect(user).toEqual(userResult);
    });

    test('getActiveUser should return a object', () => {
        const username = 'Joaquín';
        const expectedUser = {
            uuid: 'aabc321',
            username: username,
        }
        const activeUser = getActiveUser(username);
        // We can not evaluate objects with === operator
        expect(activeUser).toEqual(expectedUser);
    });
});