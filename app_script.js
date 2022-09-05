function learnGoogleAppScript() {
    var dataObj = {
        name: 'Roni',
        age: 36,
        address: '4th avenue,  New York'
    }

    for (var key in dataObj) {
        Logger.log(key + ' = ' + dataObj[key]);
    }
}