
const express= require ("express");
const { createGroup, getGroupsData } = require("../controllers/group.controller");

const router = express.Router()


router.post("/createGroup",createGroup )
router.get("/getGroups", getGroupsData)

module.exports = router;