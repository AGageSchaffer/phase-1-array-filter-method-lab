const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function filter(collection, cb) {
    const newCollection = []
    for (const drivers of collection) {
        if (cb(drivers)) {
            newCollection.push(drivers)
        }
    }
    return newCollection
}
const findMatching = filter(drivers, function(driver) {
    return drivers.name === driver
})