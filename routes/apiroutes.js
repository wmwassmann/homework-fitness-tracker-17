module.exports = function(app) {

    // Importing models needed to update exercises
    const Workout = require('../models/workout.js')
    
        // API GET Requests
        // Below code handles when users "visit" a page.
        // In each of the below cases when a user visits a link
        // Retrieve the last workout by fetching them all in descending order; frontend renders based on order
        app.get("/api/workouts", (req, res) => {
          Workout.find({})
            .sort({ date: -1 })
            .then(dbWorkouts => {
              res.json(dbWorkouts);
            })
            .catch(err => {
              res.status(400).json(err);
            });
          });
    
        // Get all the workouts from the db, unsorted, for the /stats page
          app.get("/api/workouts/range", (req, res) => {
            Workout.find({})
            .then(dbWorkouts => {
              res.json(dbWorkouts);
            })
            .catch(err => {
              res.status(400).json(err);
            });
          });
        
          // API POST Requests
          // Below code handles when a user submits a form and thus submits data to the server.
    
        // Create a new workout
          app.post("/api/workouts", ({body}, res) => {
    // Add a Workout.create() method that creates a new workout, taking in the body of the request as keys/values
              Workout.create(body)
                .then(dbWorkouts => {
                  res.json(dbWorkouts);
                })
                .catch(err => {
                  res.status(400).json(err);
                })
          });
    
        // API PUT requests to update add a new exercise to a workout in the db
          app.put("/api/workouts/:id", ({body, params}, res) => {
            // Grab the ID of the previous workout, then add code to add to that database entry based on the id
    
            Workout.findOneAndUpdate({_id: params.id}, { $push: { exercises: body } }, {runValidators: true})
            .then(dbWorkouts => {
              res.json(dbWorkouts);
            })
            .catch(err => {
              res.json(err);
            });
          });
    
      };