function volume(prism) {
    // Type Guard
    switch (prism.kind) {
        case 'cube':
            return prism.size * prism.size * prism.size;
        case 'cuboid':
            return prism.width * prism.depth * prism.height;
        default:
            assertNever(prism);
            break;
    }
}
function assertNever(arg) {
    throw new Error("Possible new tagged type: " + arg);
}
