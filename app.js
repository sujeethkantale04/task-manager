const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect.js')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)
        // app.get('/hello',(req,res)=>{
        //     res.send('Task Manager App')
        // })




// app.get('/api/v1/tasks')           - get all the tasks
// app.post('/api/v1/tasks')          - create a new task 
// app.get('/api/v1/tasks/:id')       - get single task
// app.patch('/api/v1/tasks/:id')     - update task
// app.delete('api/v1/tasks/:id')     - delete task 

const port = 3000;

// This step involves connect to server only if DB is connected
const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listening on port ' + port ))
    }catch(error){
        console.log(error)
    }
}
start()
// app.listen(port,console.log('server is listening on port ' + port ))


