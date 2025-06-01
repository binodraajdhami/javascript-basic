// axios
// ORM
// Prisma : SQL
// Mongoose : NOSQL

// Asyn any Await
// API called

const apiURL = "https://jsonplaceholder.typicode.com/users";

// 1 Methods
async function fetchUser() {
    const result = await fetch(apiURL);
    const data = await result.json()
    console.log(data);
}

// 2 Methods
function fetchUser() {
    return fetch(apiURL);
}

let result = fetchUser();
result
    .then(function (data) {
        return data.json();
    })
    .then(function (users) {
        console.log("users :", users)
    })
    .catch(function (err) {
        console.log('Error in:', err)
    });