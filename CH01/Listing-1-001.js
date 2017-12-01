// Not using with
const radius1 = 4;
const area1 = Math.PI * radius1 * radius1;

// Using with
const radius2 = 4;
with (Math) {
    const area2 = PI * radius2 * radius2;
}
