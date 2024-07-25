/** Task:1 **/
import { sum } from "./sum.js";

console.log(`Sum of 3 & 4: ${sum(3, 4)}`);

/** Task:2 **/
import { person } from "./person.js";

console.log(person);
person.intro();

/** Task:3 **/
import { dbLog, controllerLog, apiLog } from "./logger.js";

dbLog();
controllerLog(() => {
  console.log("controller is passed");
});
apiLog("https://api.freeapi.app/api/v1/public/stocks");

/** Task:4 **/
import arrayLog from "./arraylog.js";

arrayLog([1, { id: 1, name: "John" }, true, [1, 2, 3]]);

/** Task:5 **/
import user from "./user.js";
console.log(user.demoUser);
console.log(user.userHobbies);
console.log(user.isUserIsAbove18);

user.intro(user.demoUser);
const url = "https://api.freeapi.app/api/v1/public/randomusers/user/random";
user.getUserFromApi(url);

/** Task:6 **/
import _ from "lodash";

const arr1 = [5, 604, 75];
const arr2 = [88, 69, 101];
const finalArray = _.concat(arr1, arr2, 55);
console.log(finalArray);

_.forEach(finalArray, function (value) {
  console.log(value * value);
});

_.delay((value) => console.log(value), 2000, "Later");

/** Task:7 **/
import axios from "axios";

const freeapiBookUrl =
  "https://api.freeapi.app/api/v1/public/books/book/random";

axios(freeapiBookUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));

const kitchenSinkPostUrl =
  "https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post";

const axiosPostMethod = async (url) => {
  const response = await axios({
    method: "POST",
    url: url,
    data: {
      kitchenProduct: "Chai",
    },
  });

  console.log(response.data);
};

axiosPostMethod(kitchenSinkPostUrl);