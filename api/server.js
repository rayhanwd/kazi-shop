const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 4400;
//export all route
const auth = require("./route/Auth");
const products = require("./route/Product");
dotenv.config();
app.use(cors());
app.use(express.json());

//conection mongoose

mongoose.connect(process.env.Mongoose_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))

//handle routing path
app.use('/api/auth',auth)
app.use('/api/product',products)

app.get('/', (req, res) => {
    res.send('Kazi Shop Bd')
})

app.listen(port, () => {
    console.log(`${port}`, 'server running...')
})