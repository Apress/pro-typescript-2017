const scopeLosingExample = {
    text: "Property from lexical scope",
    run: function () {
        setTimeout(function () {
            alert(this.text);
        }, 1000);
    }
};

// alerts undefined
scopeLosingExample.run();

const scopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
        setTimeout(() => {
            alert(this.text);
        }, 1000);
    }
};

// alerts "Property from lexical scope"
scopePreservingExample.run();