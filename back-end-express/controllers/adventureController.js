const express = require('express');
const router = express.Router();
const Adventures = require('../models/adventure');

// index route
router.get('/', async (req, res) =>{
    try {
        // const allAdventures = await Adventures.find();
        res.send('adventures route is working')
    }catch(err){
        res.send(err)
    }
})
// new route -- new form
router.get('/new', (req, res) =>{
    res.send('this is the new adventure page')
})
// create route
router.post('/', (req, res) =>{
    res.send('posted')
})
// show route

// edit route -- edit form

// update route

// delete route


module.exports = router;