interface Printer {
    printDocument(document: Document);
}

interface Stapler {
    stapleDocument(document: Document, tray: number);
}

interface Copier {
    copyDocument();
}

class SimplePrinter implements Printer {
    printDocument(document: Document) {
        //...
    }
}

class SuperPrinter implements Printer, Stapler, Copier {
    printDocument(document: Document) {
        //...
    }

    copyDocument() {
        //...
    }

    stapleDocument(document: Document, tray: number) {
        //...
    }
}
