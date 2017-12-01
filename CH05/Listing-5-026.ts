Promise.all([
    FictitiousAPI.getData(1),
    FictitiousAPI.getData(2),
    FictitiousAPI.getData(3),
    FictitiousAPI.getData(4)
]).then((values) => {
    for (let val of values) {
        console.log(val.name);
    }
}).catch((error) => {
    console.log('Caught ' + error);
});