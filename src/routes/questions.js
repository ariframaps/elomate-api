const express = require("express");
const QuestionsController = require("../controller/questions.js");

const router = express.Router();

// GET - questions by assignment_id & type (multiple_choice atau essay)
router.get("/:assignmentId/:type", QuestionsController.getQuestionsByType);

router.get("/options/:question_id", QuestionsController.getQuestionsByType);

module.exports = router;