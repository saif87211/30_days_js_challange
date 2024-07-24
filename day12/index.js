/** Task1 **/
const throwErrorFunc = function () {
  throw new Error("Something went Wrong..");
};

try {
  throwErrorFunc();
} catch (error) {
  console.log(error);
}

/** Task2 **/
const divide = function (numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Divide by zero leads to infinity....");
  }
  return numerator / denominator;
};

try {
  divide(5, 0);
} catch (error) {
  console.log(error);
}

/** Task3 **/
const dbCall = function (throwError = false) {
  if (throwError) {
    throw new Error("Db connection error.........");
  }
  console.log("Db connecting........");
  console.log("Db connected!!!");
};

try {
  dbCall(true);
} catch (error) {
  console.log(error);
} finally {
  console.log("Setting up configuratio....");
}

/** Task4 **/
class MyErrorClass extends Error {
  constructor(message) {
    super(message);
    console.log("Error has bee thrown...");
  }
}

const apiCall = function () {
  throw new MyErrorClass("Can't get the address");
};

try {
  apiCall();
} catch (error) {
  console.log(error);
}

/** Task5 **/
class EmptyString extends Error {
  constructor(message) {
    super(message);
    this.name = "EmpltyStringError";
  }
}

const checkUsername = function (username = "") {
  if (username === "") {
    throw new EmptyString("Username is empty..");
  }
  console.log(username);
};

try {
  checkUsername();
} catch (error) {
  console.log(error);
}

const randomNum = function (min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/** Task6 **/
const callingApi = new Promise((resolve, reject) => {
  //Calling Api......
  const num = randomNum(0, 1);
  if (num) {
    resolve({ id: 1, name: "Saif" });
  } else {
    reject(new Error("Unathorized request...."));
  }
});

callingApi.then((data) => console.log(data)).catch((err) => console.log(err));

/** Task7 **/
const getUser = async function (getUserData) {
  try {
    const data = await getUserData;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUser(callingApi);

/** Task:8 **/
const url =
  "https://api.freeapi.app/api/v1/public/randomproducts/product/random";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(`Error: ${error.message}`));

const getData = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

getData(url);
