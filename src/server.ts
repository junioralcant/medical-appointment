import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('Applicatin is running');
});

app.listen(3333, () => console.log('Server is running on port 3333'));
