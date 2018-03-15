const { Router } = require('express');
const router = Router();
const path = require('path');

router.get('./home', (req, res) => {
    console.log("Going Home");
    res.sendFile(path.join(__dirname, '../public', "index"));
});

router.get('./see-chickens', (req, res) => {
    console.log("Going to see some chickens");
    res.sendFile(path.join(__dirname, '../public', "see-chickens"));
});

router.get('./see-eggs', (req, res) => {
    console.log("Going to see come eggs");
    res.sendFile(path.join(__dirname, '../public', "see-eggs"));
});

module.exports = router;