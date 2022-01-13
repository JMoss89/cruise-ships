class Port {
    constructor(portName){
        this.portName = portName;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        const removeShipIndex = this.ships.indexOf(ship);
        this.ships.splice(removeShipIndex, 1);
    }
}

module.exports = Port;