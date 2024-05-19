import multer from 'multer';
import express from 'express';
import { signUp_user, login_user, reset_password } from '../controller/controller.js';
import { product_register } from '../controller/controller.js';
import { showFiles } from '../controller/controller.js';
const router = express.Router();

// Assuming `upload` is correctly configured in your middleware
import { upload } from '../middleWare/configFile.js';

router.post('/user/user-register', signUp_user);
router.use('/user/login', login_user);
router.post('/user/resetPassword', reset_password);
router.get('/user/product',showFiles)
// Use `multer` middleware to handle multipart form data
router.post('/user/productRegister', upload.fields([{ name: 'product_image', maxCount: 1 }, { name: 'product_video', maxCount: 1 }]), product_register);

export default router;
