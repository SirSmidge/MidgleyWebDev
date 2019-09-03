let express = require('express');
let app = express();
let port = process.env.PORT;

app.get('/index', ( req, res ) => {
  req.send('./public/index.html');
})
app.use(express.static('public'))

app.listen (port, () => {
  console.log(`===== success @ http://localhost:${port} =====`)
})