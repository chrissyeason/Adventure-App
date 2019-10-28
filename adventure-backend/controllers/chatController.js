const express = require('express');
const router = express.Router();
const Messages = require('../models/messages');

// get route
router.get('/:room', async (req, res) =>{
    let room = req.params.room
    try {
        const allMessages = await Messages.find({'room': room}).populate('user', 'room');
        // this is the response to react
        console.log(req.params.room, 'this is req.params.room')
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