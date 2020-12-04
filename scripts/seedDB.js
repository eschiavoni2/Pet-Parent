const mongoose = require("mongoose");
const db = require("../models/index");

// Empty the pets collection and inserts the pets attrbs below
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/pets", {
//     useNewUrlParser: true,
//     useFindAndModify: false
//   });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_authenticate_me', { useNewUrlParser: true, useUnifiedTopology: true });

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
