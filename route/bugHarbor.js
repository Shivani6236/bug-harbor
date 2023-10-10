const express = require('express');
const { bugHarborPage, createProject, addProjectToMongoDB, projectDetails, filterProjectDetails, createAnIssue, addAnIssue } = require('../controller/bugController');
const router = express.Router();

router.get('/', bugHarborPage)
router.get('/createProject', createProject)
router.post('/addProject',addProjectToMongoDB)
router.get('/projectDetails', projectDetails)
router.post('/filterProjectDetails', filterProjectDetails)
router.get('/createAnIssue/:id', createAnIssue)
router.post('/createAnIssue/:id/addIssue', addAnIssue)

module.exports = router;
