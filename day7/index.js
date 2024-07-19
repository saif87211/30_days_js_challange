/** Activity1 : Object creation and access **/
console.log("Activity: 1");

const book = {
  title: "The Autobiography of a Stock",
  author: "Manoj Arora",
  publishedYear: 2019,
};

console.log(book);
console.log(`Title of the book is ${book["title"]}`);
console.log(`Author of the book is ${book.author}`);

console.log("__________________________________\n");

/** Activity2 : Object methods **/
console.log("Activity: 2");

const book2 = {
  title: "C# & .NET",
  author: "Mark J. Price",
  publishedYear: "2022",
  getTitleAndAuthor() {
    return `Book is ${book2.title} and author is ${book2.author} `;
  },
  updatePublishYear(year) {
    book2.publishedYear = year;
    console.log(book2);
  },
};

console.log(book2.getTitleAndAuthor());

book2.updatePublishYear(2018);

console.log("__________________________________\n");

/** Activity3 : Nested objects **/
console.log("Activity: 3");

const library = {
  name: "Book Heavans",
  books: [
    {
      title: "C in Depth",
      author: "S.K.Srivastava",
      publishedYear: 2014,
    },
    {
      title: "How to win friends and family and influence people",
      author: "Dale Carnegie",
      publishedYear: 1936,
    },
    {
      title: "Nodejs: Novice to ninja",
      author: "Craig Buckler",
      publishedYear: 2022,
    },
  ],
};

console.log(library);

let librayDescription = `Library name is ${library.name} and books are:\n`;
library.books.forEach((b) => {
  librayDescription += `- Book Name: ${b.title}, Author: ${b.author}\n`;
});

console.log(librayDescription);

console.log("__________________________________\n");

/** Activity4 : The this Keyword **/
console.log("Activity: 4");

book.getTitleAndAuthor = function () {
  return `Book title is ${this.title} and author is ${this.author}.`;
};
console.log(book);

console.log(book.getTitleAndAuthor());

console.log("__________________________________\n");

/** Activity5 : Object Iteration **/
console.log("Activity: 5");

for (const key in book) {
  if (Object.hasOwnProperty.call(book, key)) {
    console.log(`${key} : ${book[key]}`);
  }
}

console.log(Object.keys(book));
console.log(Object.values(book));

console.log("__________________________________\n");