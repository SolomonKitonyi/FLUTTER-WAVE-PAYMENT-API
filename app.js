const express = require('express');
const app = express();
const dotenv = require('dotenv');
const axios = require('axios');

//setting up config file
dotenv.config({ path: './config/config.env' });

//middlewares
app.use(express.json());

//import routes
const planRoutes = require('./routes/planRoutes');

//routes middleware
app.use('/api/v1', planRoutes);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server running on Port ${port}`);
});
