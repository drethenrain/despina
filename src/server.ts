import { networkInterfaces } from 'os';

import { PORT } from './utils/constants';
import app from './app';
import { connect } from './utils/database';

const network = networkInterfaces();
const ip = network.wlp1s0
  ? network.wlp1s0[0].address
  : network[Object.keys(network)[1]]?.[0]?.address;

connect();

app.listen(PORT, () => {
  console.log('[SERVER] Server is running');
  console.log(`[SERVER] http://${ip}:${PORT}`);
  console.log(`[SERVER] http://localhost:${PORT}`);
});
