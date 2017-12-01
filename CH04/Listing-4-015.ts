namespace Listing_4_015 {
    class CarWashProgram {
        constructor(private washLevel: number) {

        }

        runWash() {
            let wheelWash: WheelCleaning;
            let bodyWash: BodyCleaning;

            switch (this.washLevel) {
                case 1:
                    wheelWash = new BasicWheelCleaning();
                    wheelWash.cleanWheels();

                    bodyWash = new BasicBodyCleaning();
                    bodyWash.cleanBody();

                    break;
                case 2:
                    wheelWash = new BasicWheelCleaning();
                    wheelWash.cleanWheels();

                    bodyWash = new ExecutiveBodyCleaning();
                    bodyWash.cleanBody();

                    break;
                case 3:
                    wheelWash = new ExecutiveWheelCleaning();
                    wheelWash.cleanWheels();

                    bodyWash = new ExecutiveBodyCleaning();
                    bodyWash.cleanBody();

                    break;
            }
        }
    }
}