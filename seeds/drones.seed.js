// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const DB_NAME = "lab-express-drones";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.create(drones).then((drones) => {
  console.log(`Created ${drones.length} drones`);

  // Once created, close the DB connection
  mongoose.connection.close();
});
