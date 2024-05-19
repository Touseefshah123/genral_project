import  Express  from 'express';
import multer from 'multer';


// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'-'+file.originalname); // Use original file name
    }
});

 export const upload = multer({ storage: storage });

// Your routes and other middleware configurations...
