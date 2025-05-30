const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON requests

// Example routes
app.get('/', (req, res) => {
  res.send('Doctor Ranking API is running!');
});

app.get('/doctors', (req, res) => {
  res.json([
    { id: 1, name: 'Dr. Ahmad', rating: 4.8 },
    { id: 2, name: 'Dr. Lina', rating: 4.5 }
  ]);
});

app.post('/review', (req, res) => {
  const { doctorId, review, rating } = req.body;
  console.log('New review:', doctorId, review, rating);
  res.json({ message: 'Review received' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});