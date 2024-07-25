export const dbLog = () => {
  console.log(`Db Connnected : ${new Date()}`);
};

export const controllerLog = (controller) => {
  console.log(
    `Controls called sucessfull method is ${controller} ${new Date()}`
  );
  controller();
};

export const apiLog = async (url) => {
  setTimeout(() => {
    console.log(`Data fetched sucessfully ${new Date()}`);
  }, 2000);
};
