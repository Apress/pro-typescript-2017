namespace Listing_4_024 {
    class Acts {
        public static message = 'Acting';

        act() {
            alert(Acts.message);
        }
    }

    class Actor implements Acts {
        act: () => void;
    }

    applyMixins(Actor, [Acts]);

    const actor = new Actor();

    // Logs 'Acting'
    actor.act();
}