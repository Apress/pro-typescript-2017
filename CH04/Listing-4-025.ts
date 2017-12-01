namespace Listing_4_025 {
    type Constructor<T = {}> = new (...args: any[]) => T;

    function Acts<TBase extends Constructor>(Base: TBase) {
        return class extends Base {
            message: string = 'Acting';
            act() {
                alert(this.message);
            }
        };
    }

    class Person {
        constructor(private name: string) {

        }
    }

    const Actor = Acts(Person);

    const actor = new Actor('Alan');

    actor.act();
}