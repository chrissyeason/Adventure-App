const express = require('express');
const router = express.Router();
const Messages = require('../models/messages');

// get route
router.get('/', async (req, res) =>{
    try {
        const allMessages = await Messages.find().populate('user');
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

module.exports = router;