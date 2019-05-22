const router = require('express').Router();
const axios = require('axios');

router.get('/:username', (req, res) => {
    axios.post("https://mif88l63ba.execute-api.us-west-2.amazonaws.com/default/personality-score", { headers: { accept: 'application/json' }, username: req.params.username })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.status(500).json(err.response);
        });
});

module.exports = router;