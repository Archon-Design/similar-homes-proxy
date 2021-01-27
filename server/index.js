const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client', 'dist')));
app.use(cors());
app.use(express.json());

app.get('/api/gallery', routes.getGallery);
app.get('/api/similar', routes.getSimilar);
app.get('/api/reviews', routes.getReviews);
app.get('/api/calculator', routes.getCalculator);


app.listen(3000, () => {console.log('Proxy listening on Port 3000'); });