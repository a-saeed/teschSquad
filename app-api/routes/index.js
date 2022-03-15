import express from 'express'
const router = express.Router();
import jobsController from '../controllers/jobs.js'

router
    .route('/jobs')
    .post(jobsController.jobsCreate)

export default router