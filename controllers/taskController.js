const Task = require('../models/Task')

const getAllTask = (req, res) => {
    res.json({ success: true, data: [] })
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)

    res.status(201).json({ success: true, task: task })
}

const deleteTask = (req, res) => {
    const id = req.params.id
    if (id)
        return res
            .status(403)
            .json({ success: true, msg: 'please provide the id' })
    res.json({ success: true, data: [] })
}
const updateTask = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    if (!name || !id)
        return res
            .status(403)
            .json({ success: true, msg: 'please provide all the info' })

    res.status(200).json({ success: true, data: [] })
}
const getTask = (req, res) => {
    const id = req.params.id

    res.status(200).json({ success: true, data: [] })
}

module.exports = { getAllTask, getTask, deleteTask, updateTask, createTask }
