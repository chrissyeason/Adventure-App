const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs')

// index route
router.get('/', async (req, res) =>{
    try {
        // const allAdventures = await Adventures.find();
        res.send('user route is working')
    }catch(err){
        res.send(err)
    }
})
// login route
router.post('/login', async (req, res) =>{
    // first query the databse to see if the user exists
    try{
        const foundUser = await User.findOne({username: req.body.username});
        console.log(foundUser, 'foundUser');
        // If teh user exists we'll use bcrypt to see if their password is valid
        if(foundUser){
            // bcrypt compare returns true or false
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                // if valid, we'll set hte session
                req.session.userId = foundUser._id;
                req.session.username = foundUser.username;
                req.session.logged = true;

                res.redirect('/user')
            }else{
                // send message backt ot client that the username or password is incorrect
                req.session.message = 'Username or Password incorrect';
                res.redirect('/');
            }
        }
    }catch(err){
        res.send(err);
    }
});
// register route
router.post('/register', async (req, res) =>{
    // encrypt password
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    console.log(hashedPassword)

    req.body.password = hashedPassword;

    // create user
    try{
        const createdUser = await User.create(req.body);
        console.log(createdUser, 'created user');

        // set session info
        req.session.userId = createdUser._id;
        req.session.username = createdUser.username;
        req.session.logged = true;
        
        res.json({
            status: {
                code: 201
            },
            data: createdUser
        })
    }catch(err){
        res.send(err)
    }
});
// logout route
router.get('/logout', (req, res) =>{
    req.session.destroy((err) =>{
        if(err){
            res.send(err);
        }else{
            res.redirect('/');
        }
    })
})
module.exports = router;