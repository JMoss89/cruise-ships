const Port = require("../port.js");

describe('Port', () => {

    test('returns an instance of Port', () => {
        const port = new Port('Shanghai');
        expect(port).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {
        const port = new Port('Shanghai');
        expect(port.portName).toBe('Shanghai');
    })

})