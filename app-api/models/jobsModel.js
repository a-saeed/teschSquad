import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    date: {type: Date, default: Date.now()},
    description: { type: String, required: true, unique: true }
})
const jobsModel = mongoose.model('jobsModel', jobSchema)

export default jobsModel