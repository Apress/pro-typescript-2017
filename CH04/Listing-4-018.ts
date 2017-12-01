class CarWashProgram {
    constructor(private cleaningFactory: ValetFactory) {
		
    }

    runWash() {
        const wheelWash = this.cleaningFactory.getWheelCleaning();
        wheelWash.cleanWheels();

        const bodyWash = this.cleaningFactory.getBodyCleaning();
        bodyWash.cleanBody();
    }
}