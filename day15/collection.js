export const collcetion = (...args) => {
  const arr = [...args];
  return {
    add(item) {
      arr.push(item);
    },
    removeLast() {
      arr.pop();
    },
    getList() {
      return arr;
    },
  };
};
