Promise.race([
    FictitiousAPI.getData(1),
    FictitiousAPI.getData(2),
    FictitiousAPI.getData(3),
    FictitiousAPI.getData(4)
]).then((data) => {
    console.log(data.name);
}).catch((error) => {
    console.log('Caught ' + error);
});