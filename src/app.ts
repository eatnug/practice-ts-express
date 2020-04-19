import express from 'express';

const app = express();

// 클라이언트가 crawl 라우터로 GET 요청을 보냈을 때, 'hello'라는 값을 보내는 코드
app.get('/', (req, res) => res.send('hello world'));

app.listen(8080, () => {
  console.log('server started!');
});
