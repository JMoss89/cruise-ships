const Ship = require ("../cruise-ships.js");

describe ('Ship', () => {

    test ('returns an instance of Ship', () => {
        expect (new Ship()).toBeInstanceOf (Object);
    });

    test ('it has a starting port', () => {
        const ship = new Ship ('Tianjin');
        expect (ship.startingPort).toBe('Tianjin');
    })
});

describe ('setSail', () => {
    // set up 
    test ('returns falsy value of startingPort when call setSail method', () => {
        const ship = new Ship ('Tianjin');
        // exercise
        ship.setSail();
        //verify
        expect (ship.startingPort).toBeFalsy();
    });
});