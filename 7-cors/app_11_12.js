import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
const corsOptions = {
  origin: ["https://127.0.0.1:5500"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser()); // token? 제대로 알아둬야 할거 같다
app.use(morgan("tiny")); // http method 및 전달된 시간을 표시해준다
app.use(cors(corsOptions)); // 이렇게 설정을 해주지 않으면 다른 도메인에서는 비동기로 전달해서 받아올수없다
                            // 비동기가 맞나?

app.use(helmet()); // 보안에 관련된 헤더를 추가해준다

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Welcome!");
});

app.listen(4020);
