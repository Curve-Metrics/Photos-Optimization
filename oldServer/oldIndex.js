const path = require('path');
const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use('/', express.static('public'));
app.use('/:homeId', express.static('public'));

app.get('/api/photoGallery/:homeId', controller.getHomeInfo);
app.patch('/api/photoGallery/:homeId', controller.toggleHomeSaved); //not used on front end yet
app.get('/api/photoGallery', controller.getAllHomes);
app.delete('/api/photoGallery', controller.deleteAll); //dev

app.listen(port, () => {
  console.log('listening at port ', port);
});
