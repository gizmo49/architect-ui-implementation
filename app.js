const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    
    res.render('index.ejs');
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`app running port ${PORT}`)
});