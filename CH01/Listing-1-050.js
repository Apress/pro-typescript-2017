{
    // Returning a tuple
    function getThreeLandmarks() {
        return ['Golden Gate Bridge', 'Palace of Westminster', 'Colosseum '];
    }
    // Destructuring the tuple into named variables
    var _a = getThreeLandmarks(), sanFrancisco = _a[0], london = _a[1], rome = _a[2];
}
