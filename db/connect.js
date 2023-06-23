const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://sujeeth_kantale:2869@cluster0.1prxvn5.mongodb.net/03-task-manager?retryWrites=true&w=majority'

const connectDB=(url)=>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB


// mongoose.connect(connectionString, 
//     {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
    // .then(()=>console.log('Connected to DB'))
    // .catch((err)=>console.log(err)) 
