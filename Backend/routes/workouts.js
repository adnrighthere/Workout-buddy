const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutControllers')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout)

//update a workout
router.patch('/:id', updateWorkout)

//delete a workout
router.delete('/:id', deleteWorkout)

module.exports = router