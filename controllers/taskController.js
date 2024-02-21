const Task = require('../models/Task')
const asyncWrapper = require('../middleware/asyncWrapper')
const getAllTask = asyncWrapper(async (req, res) => {
    const task = await Task.find({})
    res.status(200).json({ success: true, tasks: task })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)

    res.status(201).json({ success: true, task: task })
})

const getTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    const task = await Task.findOne({ _id: id })
    if (!task) {
        return res.status(404).json({
            success: false,
            error: 'no task with that specific id:' + id,
        })
    }
    res.status(200).json({ success: true, task })
})
const deleteTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    const task = await Task.findOneAndDelete({ _id: id })
    if (!task) {
        return res.status(404).json({
            success: false,
            error: 'no task with that specific id:' + id,
        })
    }

    res.status(200).json({ success: true, task })
})
const updateTask = asyncWrapper(async (req, res) => {
    const id = req.params.id
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        return res.status(404).json({
            success: false,
            error: 'no task with that specific id:' + id,
        })
    }
    res.status(200).json({ success: true, task })
})
module.exports = { getAllTask, getTask, deleteTask, updateTask, createTask }
