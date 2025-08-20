// Task 1
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Fetched")
        }, 1000);
    })
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts Fetched")
        }, 1000);
    })
}

async function fetchAllData() {
   const [user, posts] = await Promise.all([fetchUser(), fetchPosts()])
  console.log(user);
  console.log(posts);
}

fetchAllData();


// Task 2
function fetchSuccess() {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetch Success")
        }, 1000);
    })
}

function fetchFailure() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Fetch Failure")
        }, 1000);
    })
}

async function handlePromises() {
  try {
    const[Succ, fail ]= await Promise.all([fetchSuccess(), fetchFailure()])
    console.log(Succ);
    console.log(fail);    
  } catch (error) {
    console.log( `Hi `, error);
  }
}

handlePromises();
