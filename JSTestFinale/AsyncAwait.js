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

// fetchAllData();


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

// handlePromises();


async function fetchWithTimeout(promise, timeout) {
  // Create a timeout promise that rejects/resolves after timeout duration
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout exceeded");
    }, timeout);
  });

  // Use Promise.race to race between the input promise and timeoutPromise
  const result = await Promise.race([promise, timeoutPromise]);
  return result;
}

// Example usage:
const fetchPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 1000);
});

(async () => {
  const result1 = await fetchWithTimeout(fetchPromise, 1500); // Resolves in time
  console.log(result1); // Data fetched successfully

  const result2 = await fetchWithTimeout(fetchPromise, 500); // Timeout exceeded
  console.log(result2); // Timeout exceeded
})();
