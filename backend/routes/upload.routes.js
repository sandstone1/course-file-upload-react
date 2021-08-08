

// import in express
import express from 'express';
// instead of creating an instance of express or " const app = express(); " and then doing
// app.get(), app.post(), app.delete(), etc. we can use the Express router to manage all of
// our routes more efficiently
// create a new Express router
const router = express.Router();
// import in the upload controller function and remember to add the .js
import { 
    uploadFile
} from '../controllers/upload.controllers.js';

// Route 1
// upload a file
// and remember " / " equals " /api/upload "
router.route( '/' ).post( uploadFile );


export default router;

