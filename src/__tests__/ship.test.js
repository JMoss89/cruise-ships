const Ship = require("../ship.js");
const Port = require("../port.js");
const Itinerary = require('../itinerary.js');

describe('Ship', () => {

    test('returns an instance of Ship', () => {
        const port = new Port('Shanghai');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    test('it has a starting port', () => {
        const port = new Port('Shanghai');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port);
    })
});

describe('setSail', () => {
    
    test('can set sail', () => {
        const tianjin = new Port('Tianjin');
        const shanghai = new Port('Shanghai');
        const itinerary = new Itinerary([tianjin, shanghai]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(tianjin);
    });
});

describe('dock', () => {
    test('can dock at a different port', () => {
        const tianjin = new Port('Tianjin');
        const shanghai = new Port('Shanghai');
        const itinerary = new Itinerary([tianjin, shanghai]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(shanghai);
    });

    test('it can\'t sail further than its itinerary', () => {
        const tianjin = new Port('Tianjin');
        const shanghai = new Port('Shanghai');
        const itinerary = new Itinerary([tianjin, shanghai]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
});