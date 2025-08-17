function FetchUserData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Shlok", url: "https://google.com"})
        }, 2000);
    })
}

async function GetUserData() {
    try {
        console.log("Fetching data");
        const wait = await FetchUserData();
        console.log("user's data", wait);        
    } catch (error) {
        console.log("Error fecthing data", error);
    }
}

GetUserData();