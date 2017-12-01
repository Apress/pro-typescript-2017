interface NodeList {
    readonly length: number;
    item(index: number): Node;
    [index: number]: Node;
}
