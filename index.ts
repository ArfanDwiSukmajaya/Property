import express from 'express';
import "./config/mongoose"
import propertyRoutes from './routes/PropertyRoutes';
import userRoutes from './routes/UserRoutes';

const app = express();
app.use(express.json());

const PORT = 3000;


// Property routes
app.use('/api/properties', propertyRoutes);

// User routes
app.use('/api/users', userRoutes);


app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});