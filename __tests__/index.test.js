const holaMundo = require('../index');

test('Retorna "Hola Mundo"', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});
