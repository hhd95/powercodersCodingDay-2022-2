var library = [
  {
    title: "Atli Karinca",
    author: "Anna Karanina",
    Sold: true,
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    Sold: false,
  },
  {
    title: "Yas 17",
    author: "Ipek Ongun",
    Sold: false,
  },
];

for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
  if (library[i].Sold === true) {
    console.log("We don't have in Stock" + book);
  } else {
    console.log("11 CHF " + book);
  }
}
