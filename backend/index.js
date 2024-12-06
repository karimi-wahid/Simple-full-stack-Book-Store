import express, { json, response } from 'express';
import { PORT, mongodbURI } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRouter from './routes/booksRoutes.js'
import cors from 'cors'

const app = express();

//middleware for parsing request body
app.use(express.json())

//middleware for handling CORS Policy
// option 1: Allow All Origins with Default of cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['Get', 'Post', 'Put', 'Delete'],
//         allowedHeaders: ['Content-Type']
//     })
// )


app.get('/', (req, res)=> {
    console.log(req)
    return res.status(234).send('welcome to books store')
});

app.use('/books', booksRouter);

mongoose.connect(mongodbURI).then(() => {
    console.log('Database is connected successfully.');
    app.listen(PORT, ()=> {
        console.log(`App is listening to port: ${PORT}`)
    })
})
