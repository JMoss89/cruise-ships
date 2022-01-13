const Ship = require("../ship.js");
const Port = require("../port.js");
const Itinerary = require('../itinerary.js');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let ship;
        let tianjin;
        let shanghai;
        let itinerary;

        beforeEach(() => {
            tianjin = new Port('Tianjin');
            shanghai = new Port('Shanghai');
            itinerary = new Itinerary([tianjin, shanghai]);
            ship = new Ship(itinerary);
        });

        test('returns an instance of Ship', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        test('it has a starting port', () => {
            expect(ship.currentPort).toBe(tianjin);
        });

        test('it gets added to port on instantiation', () => {
            expect(tianjin.ships).toContain(ship);
        });

        test('can set sail', () => {
            
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(tianjin.ships).not.toContain(ship);
        });

        test('can dock at a different port', () => {
            
            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(shanghai);
            expect(shanghai.ships).toContain(ship);
        });

        test('it can\'t sail further than its itinerary', () => {
          
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });
});
