// function simulateAsyncTask() {
//     console.log("Task Started");

//     setTimeout(() => {
//         console.log("Task Finished");
        
//     }, 2000);  
// }

// // simulateAsyncTask();

// function simulateMultipleTasks() {
//     setTimeout(() => {
//         console.log("Task 1 Finished");
        
//     }, 1000);

//     setTimeout(() => {
//         console.log("Task 2 Finished");
        
//     }, 2000);

//     setTimeout(() => {
//         console.log("Task 3 Finished");
        
//     }, 3000);
// }

// simulateMultipleTasks();

function fetchDataWithCallback(callback) {
    // let call = callback;
        console.log("Data is Fetching");
    callback();
}

function Fetched() {
    setTimeout(() => {
        console.log("Data fetched")
    }, 2000);
    
}


fetchDataWithCallback(Fetched);