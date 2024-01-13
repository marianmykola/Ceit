const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '1234',
  port: 5432,
});

app.use(cors());


app.use(bodyParser.json());
app.post('/addData', (req, res) => {
  const { name, description } = req.body;

  const query = 'INSERT INTO postgres (name, description) VALUES ($1, $2) RETURNING *';
  const values = [name, description];
app.use(bodyParser.json());
  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).send("Internal Server Error");
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const addedData = result.rows[0];
      res.json(addedData);
    }
  });
});

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM postgres');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

});
app.delete('/api/data/:name', async (req, res) => {
const name = req.params.name;

  try {
    // Perform the DELETE operation in the database
    const result = await pool.query('DELETE FROM postgres WHERE name = $1', [name]);

    // Check if any row was affected
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Row not found' });
    }

    res.status(200).json({ message: 'Row deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
