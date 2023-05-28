const express = require('express')

const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks')

// router.get('/',getPeople)
// router.post('/',createPerson)
// router.post('/postman', createPersonPostMan)
// router.put(':id', updatePerson)
// router.delete(':id', deletePerson)

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router