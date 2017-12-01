namespace Listing_4_023 {
    class Acts {
        public message = 'Acting';

        act() {
            console.log(this.message);
        }
    }

    class Actor implements Acts {
        public message: string;
        act: () => void;
    }

    applyMixins(Actor, [Acts]);

    const actor = new Actor();

    // Logs 'undefined', not 'Acting'
    actor.act();
}