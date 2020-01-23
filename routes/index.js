const express = require('express')
const router = express.Router()
const { auth } = require('./apiAuth')
const storyManagementController = require('../controllers/storyManagement.controller')

router.post('/createStory', storyManagementController.createStory)
router.delete('/deleteStory', storyManagementController.deleteStory)
router.get('/stories', storyManagementController.getStories)

module.exports = router
