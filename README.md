# teschSquad
How to run:
1- clone the repo
2- run the command `npm install`

the app functionality runs through this endpoint {POST: http://localhost:5000/api/jobs}
-you can either use postman on the main endpoint, while making sure to provide a {"description": ""} field in the request body
or
-run the app through the provided endpoint {GET: http://localhost:5000/job/new}, which calls the main endpoint using axios instead of postman.
