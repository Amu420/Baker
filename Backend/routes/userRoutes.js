import express from 'express';
import signup from '../controller/user/signup.js';
import { login } from '../controller/user/login.js';
import logout from '../controller/user/logout.js';
const router = express.Router();


// Signup route
router.post('/api/signup', signup);

// Login route
router.post('/api/login', login);

//Logout route
router.post('/api/logout', logout);


export default router;

