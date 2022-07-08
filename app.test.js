const getUsers = require('./users')

describe('Javascript IIFE test', () => {
    test('should get the users array', async () => {
        const response = await getUsers
        expect(response).not.toBeNull();
        expect(response.array).not.toBeNull();
        expect(response.array.length).toBe(10);
        expect(response.array).toBeInstanceOf(Array);
        expect(response.array[0]).toBeInstanceOf(Object);
        console.log(response.array[0]);
    });

    test('should get a single user', async () => {
        const response = await getUsers
        expect(response).toBeDefined()   //Ensures the response is not undefined
        expect(response.array[0].name).toEqual("Leanne Graham")
    })
});