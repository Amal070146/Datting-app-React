const { createUser, getUser, updateUser,getUsersPreferred } = require("../controllers/User");
const express = require("express");
const router = express.Router();

router.post("/createuser", createUser);
router.get("/getuser/:email/:password", getUser);
router.post("/updateuser/:userid", updateUser);
router.get("/getpreferred/:userid", getUsersPreferred);

module.exports = router;
