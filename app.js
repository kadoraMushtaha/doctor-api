const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Allow cross-origin requests (important for Flutter)_TEST2
app.use(cors());

// Dummy list of doctors
const doctors = [
  { id: 1, name: 'Dr. Ahmad', rating: 4.8 },
  { id: 2, name: 'Dr. Lina', rating: 4.5 },
  { id: 3, name: 'Dr. Youssef', rating: 4.7 },
];

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Doctor Ranking API is running!');
});

// Doctors route (your Flutter app calls this)
app.get('/doctors', (req, res) => {
  res.json(doctors);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
