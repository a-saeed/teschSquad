import express from 'express'
const router = express.Router();
import jobsController from '../controllers/jobs.js'

router
    .route('/job/new')
    .get(jobsController.addJob)

export default router