import axios from "axios"
const server = 'http://localhost:5000'

//this controller sends requests to the api, using axios instead of postman
const addJob = (req, res) => {
    const path = `/api/jobs` //path to app-api/routes
    const postData = {
        description: "this is a unique job description, change it after every successful request" 
    }

    const requestOptions = { //configure axios payload 
        url: `${server}${path}`,
        method: 'post',
        data: postData
    }

 /**send request to api to create a new job 
  * instead we can directly call the api using postman
 */
    axios(requestOptions) 
        .then(response => { //a successful api response, which means a job is saved to db
            res.json({message: "job is added to database"})
        })
        .catch(err => {//errors narrowed down to 2 jobs with the same description
            res.json({message: "job description is unique, change it above to add a new job "})
    })
}

export default {
    addJob
}