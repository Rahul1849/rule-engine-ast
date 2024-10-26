// backend/models/ruleModel.js
const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
    type: String, // "operator" or "operand"
    value: String, // optional for operator
    left: Object, // reference to another Node
    right: Object, // reference to another Node
});

const ruleSchema = new mongoose.Schema({
    ruleName: { type: String, required: true },
    rootNode: nodeSchema,
});

const Rule = mongoose.model('Rule', ruleSchema);

module.exports = Rule;
