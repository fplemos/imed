const express = require('express');
const router = express.Router();

router.delete('/body', (req, res, next) => {
    console.log('com parametro body');
    res.json({ msg: req.body.id });
    // next();
    res.end();
});
router.get('/', (req, res, next) => {
    console.log('sem parametro');
    res.json({ msg: req.query.tipo });
    res.end();
});

router.get('/:id', (req, res, next) => {
    console.log('com parametro');
    res.json({ msg: req.params.id });
    // next();
    res.end();
});

module.exports = router;
