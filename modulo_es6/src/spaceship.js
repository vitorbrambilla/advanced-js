class Spaceship {
    constructor(name, captain, armaments = [], defenses = []) {
        this.name = name
        this.captain = captain
        this.armaments = arguments
        this.defenses = defenses
    }
}

export default Spaceship