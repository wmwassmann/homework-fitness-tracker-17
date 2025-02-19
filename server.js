// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/FITNESS_TRACKER',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

const connectionSuccess = mongoose.connection
connectionSuccess.once('open', _ => {
  console.log('Database connected:', 'mongodb://localhost/FITNESS_TRACKER')
})

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});