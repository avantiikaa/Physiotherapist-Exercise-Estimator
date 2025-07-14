const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/home.html');
});

app.post('/select-equipment', (req, res) => {
  res.sendFile(__dirname + '/../public/select-equipment.html');
});

app.post('/recommend-exercises', (req, res) => {
  res.sendFile(__dirname + '/../public/beginner-exercises.html');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
