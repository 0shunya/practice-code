function WePostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched Post Data");          
        }, 2000);
    })
}


function WeUpdatePostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched Updated Post Data");          
        }, 2000);
    })
}

async function GetFetchedData() {
   try {
     console.log("Fecthing Data");
    const [Postit, Updatedit] = await Promise.all([WePostData(), WeUpdatePostData()])
    console.log(Postit);
    console.log(Updatedit);
    
   } catch (error) {
        console.log("Error fetching data")
   }    
}

GetFetchedData();