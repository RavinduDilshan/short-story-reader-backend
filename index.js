const express = require('express');
var postRoutes = require('./story_services');
const app = express();

app.use(express.json());
app.use(postRoutes)


app.listen(3000, () => console.log('Example app is listening on port 3000.'));

