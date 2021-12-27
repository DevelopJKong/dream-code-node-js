import express from 'express';
import cors from 'cors';
const app = express();

// app.get('/',(req,res) => {
//     res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET,POST,PUT,DELETE'
//     );
//     next();
// });

app.use(cors({
    origin:['https://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true
})
);

app.get('/',(req,res) => {
    res.send('Welcome!');
});


app.listen(4020);