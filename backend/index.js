const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


const port = process.env.PORT || 3000;
app.use(express.json());

const routes = require('./routes/route');

// console.log(app);

app.get('/', (req, res) => {
   
    res.send('Hello, World belajar!');
});

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});