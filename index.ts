import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './routes/router';

type Port = string | number;

const PORT: Port = process.env.PORT || 3000;

const app: express.Application = express();
app.use(bodyParser.json());

// const hostname: string = 'localhost';

app.use('/api/v1', router);

app.use('/apidoc', express.static(path.resolve(__dirname, 'doc')));

app.listen(PORT, (err: any) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening on localhost:${PORT}`);
});
