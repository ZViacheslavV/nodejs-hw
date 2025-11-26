import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB';
// import { Note } from './models/note';
import { logger } from './middleware/logger';
import { notFoundHandler } from './middleware/notFOundHandler';
import { errorHandler } from './middleware/errorHandler';
import router from './routes/notesRoutes';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(router); // ! is this right? /notesRouter

app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
