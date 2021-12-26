import express from 'express';

const postRouter = express.Router();

postRouter.get("/",(req,res) => {
    res.status(201).send('GET: /posts');
});

postRouter.post("/",(req,res) => {
    res.status(201).send('POST: /posts');
});

postRouter.put("/:id",(req,res)=>{
    res.status(201).send('PUT: /posts/:id');
});

postRouter.delete("/:id",(req,res) => {
    res.status(201).send('DELETE: /posts/:id');
});

export default postRouter;