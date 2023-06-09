var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
  ];

  for (var index in library) {
    var book = library[index];
    var bookInfo = " ' " + book.title + "' by " + book.author;

    if (book.readingStatus) {
        document.write("Already read " + bookInfo + ".");
      } else {
        document.write("You still need to read " + bookInfo + ".");
      }
  }