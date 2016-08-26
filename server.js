import express from 'express';
import { resolve } from 'path';

import routeMiddleware from './server/router';

const app = express();


app.use('/static', express.static(`${__dirname}/build`));

app.use(routeMiddleware);

app.listen(3000, () => {
  console.log('Node server is running on http://localhost:3000');
});
