const mongoose = require('mongoose');

const mongoUri = "localhost:27042";

mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

const app = require('./routes/app');

app.listen(3000, _ => console.log('Listening on the port 3000...'));
