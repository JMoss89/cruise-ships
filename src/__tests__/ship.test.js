const Port = require("../port.js");
const Ship = require("../ship.js");

describe('Ship', () => {

    test('returns an instance of Ship', () => {
        const ship = new Ship('Tianjin');
        expect(ship).toBeInstanceOf(Object);
    });

    test('it has a starting port', () => {
        const port = new Port('Shanghai');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    })
});

describe('setSail', () => {
    // set up 
    test('returns falsy value of currentPort when call setSail method', () => {
        const ship = new Ship('Tianjin');
        // exercise
        ship.setSail();
        //verify
        expect(ship.currentPort).toBeFalsy();
    });
});

describe('dock', () => {
    test('it can dock at a different port', () => {
        const shanghai = new Port('Shanghai');
        const ship = new Ship ('Tianjin');
        ship.dock(shanghai);
        expect(ship.currentPort).toBe(shanghai);
    });
});