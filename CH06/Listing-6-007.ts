namespace Listing_6_007 {
    function QueryOf<T extends Element>(query: string) {
        return <T>document.querySelector(query);
    }

    const elem = QueryOf<HTMLDivElement>('div#content');

    function QueryAllOf<T extends Element>(query: string) {
        return <NodeListOf<T>>document.querySelectorAll(query);
    }

    const elems = QueryAllOf<HTMLDivElement>('div');
}