const demoUser = {
  id: 5,
  fname: "John",
  lname: "dee",
  age: 25,
};

const userHobbies = ["Coding", "Reading", "Travel"];

const isUserIsAbove18 = demoUser.age >= 18;

const intro = (user) => {
  console.log(`Hi! I am ${user.fname} ${user.lname}.`);
};

const getUserFromApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default { demoUser, isUserIsAbove18, userHobbies, intro, getUserFromApi };
