interface LightSource {
    switchOn();
    switchOff();
}

class Light implements LightSource {
    switchOn() {
        //...
    }

    switchOff() {
        //...
    }
}

class LightSwitch {
    private isOn = false;

    constructor(private light: LightSource) {	
    }

    onPress() {
        if (this.isOn) {
            this.light.switchOff();
            this.isOn = false;
        } else {
            this.light.switchOn();
            this.isOn = true;
        }
    }
}