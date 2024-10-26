// backend/controllers/ruleController.js
const Rule = require('../models/ruleModel');
const { createAST, combineASTs, evaluateAST, validateData } = require('../utils/astUtils');

// Create a new rule from a string
exports.createRule = async (req, res) => {
    const { ruleName, ruleString } = req.body;
    try {
        const rootNode = createAST(ruleString);
        const newRule = new Rule({ ruleName, rootNode });
        await newRule.save();
        res.status(201).json(newRule); // Return 201 for created resource
    } catch (error) {
        res.status(400).json({ error: 'Invalid rule string' });
    }
};

// Combine multiple rules into a single AST
exports.combineRules = async (req, res) => {
    const { ruleIds } = req.body; // Array of rule IDs to combine
    try {
        const rules = await Rule.find({ _id: { $in: ruleIds } });
        const combinedAST = combineASTs(rules.map(r => r.rootNode));
        res.json(combinedAST);
    } catch (error) {
        res.status(400).json({ error: 'Error combining rules' });
    }
};

// Evaluate a rule against provided data
exports.evaluateRule = async (req, res) => {
    const { ruleId, data } = req.body;
    try {
        const rule = await Rule.findById(ruleId);
        if (!rule) {
            return res.status(404).json({ error: 'Rule not found' });
        }
        if (!validateData(data, rule.rootNode)) {
            return res.status(400).json({ error: 'Data does not meet rule requirements' });
        }
        const result = evaluateAST(rule.rootNode, data);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Error evaluating rule' });
    }
};

// Modify a rule by updating its AST
exports.modifyRule = async (req, res) => {
    const { ruleId, newRuleString } = req.body;
    try {
        const updatedAST = createAST(newRuleString);
        const updatedRule = await Rule.findByIdAndUpdate(ruleId, { rootNode: updatedAST }, { new: true });
        if (!updatedRule) {
            return res.status(404).json({ error: 'Rule not found' });
        }
        res.json(updatedRule);
    } catch (error) {
        res.status(400).json({ error: 'Invalid rule string or update error' });
    }
};

// Get all rules
exports.getRules = async (req, res) => {
    try {
        const rules = await Rule.find({});
        res.status(200).json(rules);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching rules' });
    }
};
