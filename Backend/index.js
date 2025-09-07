import express from 'express';
import userRoutes from './routes/userRoutes.js';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',userRoutes)



import connectToDatabase from './config/mongodbconfig.js';
connectToDatabase().then(() => {
    app.listen (port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
} )
    console.log('Connected to the database successfully');
}).catch((error) => {
    console.error('Database connection failed:', error);
});
