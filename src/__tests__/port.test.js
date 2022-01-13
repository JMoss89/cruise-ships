const Port = require("../port.js");

describe('Port', () => {
    describe('with addShip and removeShip methods', () => {
        let port;
        let ship;
        let shipOne;
        let shipTwo;

        beforeEach(() => {
            port = new Port('Shanghai');
            ship = jest.fn();
            shipOne = jest.fn();
            shipTwo = jest.fn();
        });

        test('returns an instance of Port', () => {
            expect(port).toBeInstanceOf(Object);
        });

        test('has a portName', () => {
            expect(port.portName).toBe('Shanghai');
        });
    
        test('can removes ship from the ships property', () => {

            port.addShip(shipOne);
            port.addShip(shipTwo);
            port.removeShip(shipOne);

            expect(port.ships).toEqual([shipTwo]);
        });
    });
});