require('dotenv').config();

let express = require('express'),
    toDoRoutes = require('./routes/todo'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello from the root route!');
});

// Set the route for todos and use the router in todo to handle
app.use('/api/todo', toDoRoutes);


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});