const jwt = require("jsonwebtoken");

// 이렇게 하더라도 한번 발행된 토큰은 변경할수없다
const secret = "12312312312312";

const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  { expiresIn: 2 } // 이렇게 사용해주면 토큰이 언제 만료될수있는지 수정해줄수있다
);

const edited = "123";

setTimeout(()=>{
    jwt.verify(edited, secret, (error, decoded) => {
      console.log(error, decoded);
    });
},3000)

console.log(token);
