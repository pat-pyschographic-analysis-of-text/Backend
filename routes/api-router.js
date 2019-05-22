const router = require('express').Router();
const axios = require('axios');

router.get('/:username', (req, res) => {
    const username = req.params.username;

    axios.post
});