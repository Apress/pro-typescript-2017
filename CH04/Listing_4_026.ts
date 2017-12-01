namespace Listing_4_026 {
    type Constructor<T = {}> = new (...args: any[]) => T;

    function Sings<TBase extends Constructor>(Base: TBase) {
        return class extends Base {
            sing() {
                alert('Singing');
            }
        };
    }

    function Dances<TBase extends Constructor>(Base: TBase) {
        return class extends Base {
            dance() {
                alert('Dancing');
            }
        };
    }

    function Acts<TBase extends Constructor>(Base: TBase) {
        return class extends Base {
            act() {
                alert('Acting');
            }
        };
    }

    class Person {
        constructor(private name: string) {

        }
    }

    const Actor = Acts(Person);

    const AllRounder = Acts(Sings(Dances(Person)));

    const actor = new Actor('Alan');
    actor.act();

    const allRounder = new AllRounder('Gene');
    allRounder.act();
    allRounder.dance();
    allRounder.sing();
}