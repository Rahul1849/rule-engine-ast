// backend/utils/astUtils.js
const jsep = require('jsep'); // For parsing expressions

// Utility function to create AST from a rule string
const createAST = (ruleString) => {
    const parsedRule = jsep(ruleString); // e.g., jsep('age > 30')
    return parsedRule;
};

// Combine multiple ASTs into a single one
const combineASTs = (ruleNodes) => {
    let combinedNode = ruleNodes[0];
    for (let i = 1; i < ruleNodes.length; i++) {
        combinedNode = {
            type: 'operator',
            value: 'OR',
            left: combinedNode,
            right: ruleNodes[i]
        };
    }
    return combinedNode;
};

// Evaluate an AST against the provided data
const evaluateAST = (node, data) => {
    if (!node) return true;

    if (node.type === 'operand') {
        const { value } = node;
        const [field, operator, operand] = value.split(' ');
        switch (operator) {
            case '>':
                return data[field] > Number(operand);
            case '<':
                return data[field] < Number(operand);
            case '=':
                return data[field] == operand;
            default:
                return false;
        }
    }

    const leftResult = evaluateAST(node.left, data);
    const rightResult = evaluateAST(node.right, data);

    if (node.value === 'AND') {
        return leftResult && rightResult;
    } else if (node.value === 'OR') {
        return leftResult || rightResult;
    }
    return false;
};

// Validate data against rule requirements
const validateData = (data, rootNode) => {
    // Logic to validate required fields in data based on the AST
    // Example: Check if 'age' and 'salary' exist
    const requiredFields = ['age', 'salary']; // Customize based on your requirements
    return requiredFields.every(field => field in data);
};

module.exports = { createAST, combineASTs, evaluateAST, validateData };
