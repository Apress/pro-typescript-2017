{
    // Returning a tuple
    function getThreeLandmarks(): [string, string, string] {
        return ['Golden Gate Bridge', 'Palace of Westminster', 'Colosseum '];
    }

    // Destructuring the tuple into named variables
    const [sanFrancisco, london, rome] = getThreeLandmarks();
}