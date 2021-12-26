import express from "express";
import userRouter from "./router/user.js";
import postRouter from "./router/post.js";

const app = express();

app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({extended:false}));// HTML Form -> Body / HTML Form submit으로 정보를 전달할수있는데 이때 전달된 정보를 body로 parsing 해준다

const options = {
    dotfiles : 'ignore',
    etag: false,
    index: false,
    maxAge: 'id',
    redirect:false,
    setHeader: function(res,path,stat) {
        res.set('x-timestamp',Date.now());
    }
};

app.use(express.static('public',options));
app.use('/posts',postRouter);
app.use('/users',userRouter);

app.listen(4030);
