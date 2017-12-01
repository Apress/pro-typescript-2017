namespace Listing_4_009 {
    interface Printer {
        copyDocument();
        printDocument(document: Document);
        stapleDocument(document: Document, tray: number);
    }
}