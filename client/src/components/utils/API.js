import axios from "axios";

export default {
  // Gets all profiles
  getProfiles: function() {
    return axios.get("/api/pets");
  },
  // Gets the profile with the given id
  getProfile: function(id) {
    return axios.get("/api/pets/" + id);
  },
  // Deletes the profile with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a profile to the database
  saveProfile: function(profileData) {
    console.log("profile data", profileData)
    return axios.post("/api/pets", profileData);
  }
};
