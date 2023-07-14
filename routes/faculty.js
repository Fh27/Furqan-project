const express = require("express");
const getAllFaculty = require("../controllers/faculty/getAllFaculty");
const  editFaculty  = require("../controllers/faculty/editFaculty");
const getSingleFaculty = require("../controllers/faculty/getSingleFaculty");
const addFaculty = require("../controllers/faculty/addFaculty");
const router = express.Router();

router.get("/", getAllFaculty);
router.put("/edit", editFaculty);
router.post("/add", addFaculty)

router.get("/get/:id", getSingleFaculty)


module.exports = router;