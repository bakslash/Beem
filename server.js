const express= require('express');
const netRoutes = require('./api/routes/index');

const app = express();


app.use(express.json());
app.use('/', netRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});