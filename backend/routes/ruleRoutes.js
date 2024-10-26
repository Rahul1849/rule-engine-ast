// backend/routes/ruleRoutes.js
const express = require('express');
const { createRule, combineRules, evaluateRule, modifyRule, getRules } = require('../controllers/ruleController');

const router = express.Router();

router.post('/create', createRule);
router.post('/combine', combineRules);
router.post('/evaluate', evaluateRule);
router.put('/modify', modifyRule);
router.get('/', getRules); // This should return all rules

module.exports = router;
