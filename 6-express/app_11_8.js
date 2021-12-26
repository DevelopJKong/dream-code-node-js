import express, { application } from "express";
import fs from 'fs';
import fsAsync from 'fs/promises';
const app = express();

app.use(express.json());

app.get('/file1',(req,res) => {
  //동기적인 코드는 문제가 생길거 같다 하는것은 항상 try catch 로 묶어주어야 한다
  // try{
  //   const data = fs.readFileSync('/file.txt');
  // }catch(error) {
  //   res.status(404).send('File not found');
  // }

  fs.readFile('/file1.txt', (err,data) => { // 비동기적 방식
    //비동기적 방식은 에러가 발생하더라도 에러를 보내는게 아니라
    //콜백함수 자체적으로 err 라는 파라미터를 보내는것이기 때문에
    //에러를 잡가기 어렵다
    //에러를 잡으려면 꼭 그 비동기적 방식 안에 에러를 처리해줘야 한다
    // if(err) {
    //    res.status(404).send('File not found');
    // }
    try {
      const data = fs.readFileSync('/file1.txt');
    } catch (error) {
      res.sendStatus(404);
    }
  });
});

app.get('/file2',(req,res,next) => { //Promise 는 비동기식이다

  // 에러가 생겼을때는 catch 로 잡으면 된다
  // 하지만 비동기식 이기 때문에 내부적으로 처리를 무조건 해주어야 한다
  // fsAsync.readFile('/file.txt')
  // .then(data => {})
  // .catch((error) => {});

  fsAsync
  .readFile('/file2.txt') //
  .catch((error) => {
    res.sendStatus(404);
  }); // 이렇게 하면 next가 전달되어서 마지막 안전망으로 가게 된다
});

app.get('/file3',async(req,res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    res.sendStatus(404);
  }
});

app.use((error,req,res,next) => {
  console.log(error);
  res.status(500).json({message : 'Something went wrong'});
});

app.listen(4030);
