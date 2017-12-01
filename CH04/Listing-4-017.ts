class BronzeWashFactory implements ValetFactory {
    getWheelCleaning() {
        return new BasicWheelCleaning();
    }

    getBodyCleaning() {
        return new BasicBodyCleaning();
    }
}

class SilverWashFactory implements ValetFactory {
    getWheelCleaning() {
        return new BasicWheelCleaning();
    }

    getBodyCleaning() {
        return new ExecutiveBodyCleaning();
    }
}

class GoldWashFactory implements ValetFactory {
    getWheelCleaning() {
        return new ExecutiveWheelCleaning();
    }

    getBodyCleaning() {
        return new ExecutiveBodyCleaning();
    }
}
