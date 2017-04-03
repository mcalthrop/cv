const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}/`);
});
