const Itinerary = require('../itinerary.js');
const Port = require('../port.js');

describe('Itinerary', () => {

    test('return an instance of Itinerary', () => {
        const itinerary = new Itinerary(jest.fn());
        expect(itinerary).toBeInstanceOf(Object);
    });

    test('has ports property', () => {
        const london = new Port('London');
		const liverpool = new Port('Liverpool');

		const itinerary = new Itinerary([london, liverpool]);
        expect(itinerary.ports).toEqual([london, liverpool]);
    });

})