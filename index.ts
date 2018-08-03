import express from 'express';
import router from './routes/router';

type Port = string | number;

const PORT: Port = process.env.PORT || 3000;

const app: express.Application = express();

const hostname: string = 'localhost';

app.use(router);

app.listen(PORT, (err: any) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening on localhost:${PORT}`);
});
