const express = require('express');
const bodyParser = require('body-parser');
const MainRouter = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(MainRouter)
// require('./controllers/categoryController')(app);
app.listen(3000, () => console.log('Server is listening on port 3000'));