const mongoose = require('mongoose')

// module.exports= mongoose.connect(process.env.MONGOOSE_URL)
module.exports= mongoose.connect('mongodb://localhost:27017/demo_project')
.then(()=>{console.log('date base connected')})
.catch(()=>{console.log('date base not connected')})