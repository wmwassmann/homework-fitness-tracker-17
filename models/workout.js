const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [{
  type: {
    type: String,
    required: 'Enter a workout type: cardio or resistance',
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the resistance exercise"
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  duration: {
    type: Number,
    required: "Enter duration in minutes"
  },
}]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;