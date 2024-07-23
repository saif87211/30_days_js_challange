/** Task1 **/
const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Getting data from db...");
    const user = { id: 1, name: "saif" };
    resolve(user);
  }, 2000);
});

resolvePromise.then((user) => console.log(`We got the ${user}`));

/** Task2 **/
const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Getting data from db...");
    reject(new Error("Can't get the user..."));
  }, 2000);
});

rejectPromise
  .then((user) => console.log(`We get the user data: ${user}`))
  .catch((err) => console.log(err));

/** Task3 **/
const sequencePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //fetching Api
    resolve("1st Api result");
  }, 2000);
});

sequencePromise
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //fetching Api
        resolve("2nd Api result");
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //fetching Api
        resolve("3rd Api result");
      }, 2000);
    });
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/** Task4 & Task5 **/
const userPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //Fetcing data
    // resolve({ id: 5, name: "Saif" });
    reject(new Error("something went wrong...."));
  }, 2000);
});

async function getUserData(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getUserData(userPromise);

/** Task5 **/
const url = "https://api.freeapi.app/api/v1/public/randomusers";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/** Task6 **/
const getDataFormApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDataFormApi(url);

/** Task7 **/
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //fetching Api
    resolve("1st Api result");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //fetching Api
    resolve("2nd Api result");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //fetching Api
    resolve("3rd Api result");
  }, 5000);
});

//passed promise in sepcific order like 3,1,2
Promise.all([p3, p1, p2])
  .then((result) => console.table(result))
  .catch((err) => console.log(err));

/** Task7 **/
Promise.race([p1, p2, p3])
  .then((result) => console.table(result))
  .catch((err) => console.log(err));
