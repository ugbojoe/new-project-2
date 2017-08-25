const express = require('express');
// const ArtistRoutes = require('./artistRoutes');
// const AlbumRoutes = require('./albumRoutes');
const CustomerRoutes = require('./customerRoutes');
const ProductRoutes = require('./productRoutes');
const ServicetypeRoutes = require('./servicetypeRoutes');
const OrderstageRoutes = require('./orderstageRoutes');

const app = express();

// const router = express.Router(); // imported

app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome!' });
  // res.sendFile(__dirname + '/index.html'); //imported
});

// router.get('/', (req, res) => { // imported
//   // We add a delay just for demo purposes:
//   setTimeout(() => res.status(200).json({ message: 'Welcome to Express' }), 1000);
// });

// app.use('/artists', ArtistRoutes);
// app.use('/albums', AlbumRoutes);
app.use('/customer', CustomerRoutes);
app.use('/product', ProductRoutes);
app.use('/servicetype', ServicetypeRoutes);
app.use('/orderstage', OrderstageRoutes);

module.exports = app;

// module.exports = router; // imported
