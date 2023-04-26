const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const router = require('./routes/routes')
const app = express()
const port = 3000

// Connect to MongoDB database
mongoose.connect('mongodb+srv://artindex:test%40123@artindex.rxas5ro.mongodb.net/artIndex',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())
app.use(cors())
app.use('/api/v1', router)