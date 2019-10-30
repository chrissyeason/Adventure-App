const express   = require('express');
const router    = express.Router();
const User      = require('../models/user');
const bcrypt    = require('bcryptjs');


// index route
router.get('/', async (req, res) =>{
    try {
        res.send('user route is working')
    }catch(err){
        res.send(err)
    }
})
// login route
router.post('/login', async (req, res) =>{
    // first query the databse to see if the user exists
    try{
        const foundUser = await User.findOne({user: req.body.user});
        console.log(foundUser, 'foundUser');
        // If the user exists we'll use bcrypt to see if their password is valid
        if(foundUser){
            // bcrypt compare returns true or false
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                // if valid, we'll set hte session
                req.session.userId = foundUser._id;
                req.session.user = foundUser.user;
                req.session.logged = true;
                console.log(req.session.userId, 'this is req.session')
                res.json({
                    status: {
                      code: 200
                    },
                    data: foundUser
                  })
            }else{
                // send message back to client that the user or password is incorrect
                console.log("reached else statement for login route")
                res.session.message = 'user or Password incorrect';
                res.json({
                    status: {
                    code: 500,
                    message: 'Invalid Credentials'
                    }
                })
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
        req.session.user = createdUser.user;
        req.session.logged = true;
        console.log(req.session.userId, 'this is session.userId')
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
router.post('/logout', (req, res) => {
    console.log('logout successful')
    req.session.destroy((err) => {
      if(err){
        res.send(err);
      } else {
        res.redirect('/');// back to the homepage
      }
    })
  
  })
module.exports = router;