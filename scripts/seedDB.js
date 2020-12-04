const mongoose = require("mongoose");
const db = require("../models");

// Empty the pets collection and inserts the pets attrbs below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pets", {
    useNewUrlParser: true,
    useFindAndModify: false
  });

const petProfileSeed = [
  {
    pets: [
      {
        name: "Lucy",
        age: 6,
        gender: "female",
        weight: 100,
        species: "Dog",
        breed: "Rottweiler",
        location: "Palm Bay",
        microchip: "34567"
      }
    ]
  }
];



db.Pet.remove({})
  .then(() => db.Pet.collection.insertMany(petProfileSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
