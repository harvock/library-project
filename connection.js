const mongoose = require('mongoose');

// Connecting to DB.
mongoose
  .connect('mongodb://localhost/library-project', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

module.exports = mongoose;