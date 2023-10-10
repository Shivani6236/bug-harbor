const express = require('express');
const router = express.Router();
const bugHarborPath = require('./bugHarbor')

router.get('/', (req,res)=>{res.redirect('/bugHarbor')})

router.use('/bugHarbor', bugHarborPath)

module.exports = router;
