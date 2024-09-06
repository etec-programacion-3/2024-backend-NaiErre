const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/zapatillas', async (req, res) => {
  try {
    const zapatillas = await Product.findAll();
    res.json(zapatillas);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

app.post('/zapatillas', async (req, res) => {
  try {
    const newZapatilla = await Product.create(req.body);
    res.json({ message: 'Zapatilla added', product: newZapatilla });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
