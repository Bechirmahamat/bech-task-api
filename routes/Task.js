const express = require('express')
const router = express.Router()
const {
    createTask,
    deleteTask,
    getAllTask,
    updateTask,
    getTask,
} = require('../controllers/taskController')

router.route('/').get(getAllTask).post(createTask)
router
    .route('/:id')
    .put(updateTask)
    .delete(deleteTask)
    .get(getTask)
    .patch(updateTask)

module.exports = router

// api/v1/tasks  all task    get
// api/v1/tasks  create      post
// api/v1/tasks/:id   update  patch
// api/v1/tasks/:id    delete delete
// api/v1/tasks/:id   task     get
