import express from "express";
import mongoose from 'mongoose';

import router from './routes/router';

mongoose.connect('mongodb://localhost/spatinBack',
{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const app = express();
const port = 3001;

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log('Hello World!');
});