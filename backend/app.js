const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const { PORT } = require('./config/appConfig');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', projectRoutes);

// Root route - small info
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend. Use /api/projects or /api/health' });
});

// Error handler (simple)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
