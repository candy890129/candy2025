const some = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("some");
        }, 5000);
    });
};

some().then(function (data) {
    console.log(data);
});
