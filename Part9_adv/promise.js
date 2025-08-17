function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if(success) {
                resolve("Data fetched")
            }
            else {
                reject(function greet() {
                    console.log("Data Rejected");
                });
            }
        }, 3000);
    })
}

fetchData()
    .then((data) => console.log(data))
    .catch((error1) => error1()); 