const fs = require("fs");

// 3
// rename(.... callback(error,data))
// try {renameSync(....)) } catch(e) {}  => 
// promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./file-new.txt");
} catch (error) {
  console.log(error);
}

// 동기식 과 비동기식의 차이를 명확하게 이를 해야할거 같다

fs.rename("./file-new.txt", "./text.txt", (error) => {
  console.log(error);
});

console.log("hello");

fs.promises
  .rename("./text.txt", "/text-new.txt")
  .then(() => console.log("Done !"))
  .catch(console.error);
