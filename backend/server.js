/*
  1. Set const express = require('express')
  2. Set app = express();
  3. Set app.listen(5000, console.log('Server running...))
  4. In package.json, inside scripts change test to start and value to 'node backend/server to run server with 'npm start'
  5. Set app.get('/', (req, res) => { res.send('API is running...)})
  5. Set app.get('/api/products', (req, res) => { res.json(products)})
  6. Inside /data/products.js Change 'export default' to 'module.exports = '
  7. Set products = require('./data/products')
  8. Set app.get('/api/products/:id', (req, res) => { const product = products.find(p => p._id === req.params.id)}) res.json(products)-> Restart server
  9. Bring in Environment Variables-> set dotenv = require('dotenv')
  10. Declare dotenv.config()-> create .env file->restart server
  11. Declare const PORT = process.env.PORT || 5000
  12. Change(PORT, `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  13. After 'type': 'module' in package.json-> Change all require to import express from 'express'
  14. Go to products.js and change to export default products
  15. Add .js to all imported files
  16. Import connectDB from './config/db.js'
  17. Import colors from 'colors'
  18. add ${PORT}.yellow.bold
  19. Move app.get products & products:id to productRoutes
  20. Import productRoutes
  21. Use app.use to mount productRoutes
  22. Delete products.js file
  23. Add error middleware-> app.use 
  24. Add 404 error with app.use
  25. Cut middleware & 404 error
  26. Import notFound, errorHandler
*/

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

const app = express()

dotenv.config();

connectDB()


app.get('/', (req, res) => {
  res.send('Api running......')
})

app.use('/api/products', productRoutes)

app.use(notFound)

// Error middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

