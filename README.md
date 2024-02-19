+++++++++++connection string+++++++++++++++++++++
MONGO_URL="mongodb+srv://bechir:66374904Be@TASK_MANAGER.4gpy7ng.mongodb.net/task_manager?retryWrites=true&w=majority"
++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++ model+++++++++++++++++++
so we want to import this one in order to

const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
name: String,
completed: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema)
