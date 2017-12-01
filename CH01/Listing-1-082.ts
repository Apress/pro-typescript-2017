class Display {
    name: string = '';
}

class Television extends Display {

}

class HiFi {

}

const display = new Display();
const television = new Television();
const hiFi = new HiFi();

let isDisplay;

// true
isDisplay = display instanceof Display;

// true (inherits from Display)
isDisplay = television instanceof Display;

// false
isDisplay = hiFi instanceof Display;
