let express = require('express');
let app = express();
let port = process.env.PORT;

app.use(express.static('public'))

app.listen (port, () => {
  console.log(`===== success @ http://localhost:${port} =====`)
})