import express from "express"
const app1 = express();


app1.get("/jeong/:id",(req,res,next) => {
    //console.log(req.path);
    //console.log(req.headers);
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.query);
    console.log(req.query.keyword);

    //res.json({name: 'jeong'});
    //res.sendStatus(400);
    res.status(201).send("created");
    res.setHeader('key','value'); // header 정도도 보낼수있으면? 다운로드도 구현할수있지 않을까?
})
app1.listen(4020);