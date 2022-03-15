import CustomError from '../models/CustomError.js'
import jobsModel from '../models/jobsModel.js'

const jobsCreate = async (req, res, next) => {
    try {
        const newJob = new jobsModel({ description: req.body.description })
        const job = await newJob.save()
        res.status(200).json(job)
    } catch (error) {
        next(new CustomError(404, `an error occurred, please make sure the description is unique --> ${error}`))
    }
}

export default {
    jobsCreate
}