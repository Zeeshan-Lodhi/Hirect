const express = require('express');
const app = express();
const cors = require(`cors`);
const { hiringRouter } = require('./Router/hiring');

app.use(express.json())
app.use(cors())

app.use(`/api`, hiringRouter)


app.listen(8000, () => {
    console.log('Server is running at port 8000');
});