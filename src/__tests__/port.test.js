const Port = require("../port.js");
const Ship = require("../ship.js");

describe('Port', () => {

    test('returns an instance of Port', () => {
        const port = new Port('Shanghai');
        expect(port).toBeInstanceOf(Object);
    });

    test('has a portName', () => {
        const port = new Port('Shanghai');
        expect(port.portName).toBe('Shanghai');
    });
});

describe('addShip', () => {

    test('can adds a ship', () => {
        const port = new Port('Shanghai');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});

describe('removeShip', () => {

    test('can removes ship from the ships property', () => {
        const port = new Port('Shanghai');
        const shipOne = {};
        const shipTwo = {};

        port.addShip(shipOne);
        port.addShip(shipTwo);
        port.removeShip(shipOne);

        expect(port.ships).toEqual([shipTwo]);
    });
});