const express = require('express');
const router = express.Router();
const Adventures = require('../models/adventure');

// index route
router.get('/', async (req, res) =>{
    try {
        const allAdventures = await Adventures.find();
        // this is the response to react
        res.json({
            status: {
                code: 200,
                message: 'success'
            },
            data: allAdventures
        });
    }catch(err){
        res.send(err)
    }
});
// new route -- new form
router.get('/new', (req, res) =>{
    res.send('this is the new adventure page')
})
// create route
router.post('/', async (req, res, next) =>{
    try {
        console.log(req.body, 'this is req.body');
        req.body.user = req.session.userId;
        const newAdventure = await Adventures.create(req.body);
        res.json({
            status: {
                code: 200,
                message: "adventure successfully created"
            },
            data: newAdventure
        });
        
        console.log(newAdventure);
    }catch(err){
        console.log(err);
        res.send(err);
    }
})
// show route
router.get('/:id', async (req, res, next) =>{
    try{
        const foundAdventure = await Adventures.findById(req.params.id);
        res.json({
            status: {
                code: 200,
                message: "success"
            },
            data: foundAdventure
        })
    }catch(err){
        res.send(err)
    }
})

// update route
router.put('/:id', async (req, res, next)=>{
    try{
        const updatedAdventure = await Adventures.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json({
            status: {
                code: 200,
                message: "adventure successfully updated"
            }, 
            data: updatedAdventure
        })
    }catch(err){
        res.send(err)
    }
})
// delete route


module.exports = router;