var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["L"] = 2] = "L";
    Size[Size["XL"] = 3] = "XL";
})(Size || (Size = {}));
var size;
size = Size.S;
++size;
console.log(Size[size]); // M
size = Size.XL;
--size;
console.log(Size[size]); // L
size = Size.XL;
++size;
console.log(Size[size]); // undefined
