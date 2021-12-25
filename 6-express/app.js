import express from "express";
const app = express();


// all과 use의 차이점은 all은 딱 지정된 문자열에서만 되고
// use은 지정된 문자열을 포함한것은 전부 다 된다 
app.all('/api',(req,res,next) => { // all 에서도 하고 싶다면 '/api/*'
    console.log('all');
    next();
});

app.use('/sky',(req,res,next) =>{
    console.log('use');
    next();
});




app.get(
  "/",
  (req, res, next) => { /******************중요 */
    console.log("first");
    // 만약에 한곳에 두개의 res.send를 사용하고 싶을때 혹은 res.* 사용하고 싶을때
    if(true) {
        return res.send('Hello');
    }
    res.send('hi'); // 이런식으로 끝내주어야 한다 지금은 true 기 때문에 여기까지 무조건 오지 않는다
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req,res,next) =>{
    res.status(404).send('Not available! @_@');
});


app.use((error,req,res,next) => {
    console.log(error);
    res.status.send('Sorry,try later');
});
app.listen(4020);
