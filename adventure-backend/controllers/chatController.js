const express = require('express');
const router = express.Router();
const Messages = require('../models/messages');

// get route
router.get('/:room', async (req, res) =>{
    try {
        const allMessages = await Messages.find(req.param.room).populate('user', 'rooms');
        // this is the response to react
        res.json({
            status: {
                code: 200,
                message: 'success'
            },
            data: allMessages
        });
    }catch(err){
        res.send(err)
    }
});

// create route
router.post('/:room', async (req, res, next) =>{
    try {
        console.log(req.body, 'this is req.body');
        req.body.user = req.session.userId;
        const newMessages = await Messages.create(req.body);
        res.json({
            status: {
                code: 200,
                message: "Messages successfully created"
            },
            data: newMessages
        });
        
        console.log(newMessages);
    }catch(err){
        console.log(err);
        res.send(err);
    }
})

module.exports = router;