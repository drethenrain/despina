import { app } from './app';
import { connect } from './database';

connect();

app.listen(3333, () => {
  console.log('server on');
});
