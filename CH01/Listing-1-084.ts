namespace Listing_1_84 {
    class Display {
        name: string;
    }

    const display = new Display();

    // false
    const hasName = 'name' in display;
}