import express from "express"
import Product from "./models/Product.js"
import dbConnect from "./lib/dbConnect.js"
dbConnect()
import cors from "cors"

const app = express()
const port = 3000
app.use(cors())




//routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/products', async (req, res) => {
    try {
      const data = await Product.find();
      res.json(data); // Send the product data as JSON
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))