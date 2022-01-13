const Itinerary = require('../itinerary.js');

describe('Itinerary', () => {
    describe('constructor', () => {
        let itinerary;

        beforeEach(() => {
            itinerary = new Itinerary(jest.fn());//dummy
        });

        test('return an instance of Itinerary', () => {
            expect(itinerary).toBeInstanceOf(Object);
        });

        test('has ports property', () => {
            expect(itinerary).toHaveProperty('ports');
        });
    });
});