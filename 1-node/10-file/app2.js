const fs = require("fs").promises;

// Read a file

fs.readFile("./text.txt", "utf8") //
  .then((data) => console.log(data))
  .catch(console.error);

// Writing a file
fs.appendFile("./file.txt", "Hello, Dream Coders! :)") //
  .catch(console.error);

// copy
fs.copyFile("./file.txt", "./file2.txt") //
  .catch(console.error);

//순서가 중요한 경우라면 then() 키워드를 가급적이면 사용해주자
// ==> 예를들면

/*
fs.appendFile("./file.txt", "Hello, Dream Coders! :)") //
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt") //
      .catch(console.error);
  })
  .catch(console.error);
*/


//folder
fs.mkdir('sub-folder') //
.catch(console.error);


//read
fs.reader('./') //
.then(console.log)
.catch(console.error);