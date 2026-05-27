import 'dotenv/config';
import app from './app.js';
import './config/database.cjs';
import './database/index.js';

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});