var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
{
    var emergencyService = {
        police: 'Chase',
        fire: 'Marshall',
    };
    var utilityService = {
        recycling: 'Rocky',
        construction: 'Rubble'
    };
    // Object spreading
    var patrol = __assign({}, emergencyService, utilityService);
    // { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble' }
    console.log(patrol);
}
