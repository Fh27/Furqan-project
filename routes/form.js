const express = require('express');
const addForm = require('../controllers/form/addForm');
const getAllForms = require('../controllers/form/getAllForms');
const getSingleForm = require('../controllers/form/getSingleForm');
const editForm = require('../controllers/form/editForm');
const router=express.Router();

router.get("/", getAllForms);
router.get("/get/:id", getSingleForm)
router.post("/add", addForm);
router.put("/edit/:id", editForm)


module.exports=router;


