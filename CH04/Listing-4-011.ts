namespace Listing_4_011 {
    class Light {
        switchOn() {
            //...
        }

        switchOff() {
            //...
        }
    }

    class LightSwitch {
        private isOn = false;

        constructor(private light: Light) {
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
}
