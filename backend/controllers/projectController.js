const path = require('path');
const fs = require('fs');

const DATA_PATH = path.join(__dirname, '..', 'data', 'projects.json');

function getProjects(req, res) {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    const projects = JSON.parse(raw);
    res.json({ success: true, data: projects });
  } catch (err) {
    console.error('Error reading projects.json', err);
    res.status(500).json({ success: false, error: 'Cannot read projects data' });
  }
}

function health(req, res) {
  res.json({ status: 'ok', service: 'portfolio-backend' });
}

module.exports = { getProjects, health };
