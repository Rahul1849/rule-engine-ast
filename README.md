Rule Engine with AST

Overview: 

The Rule Engine is a powerful application designed to evaluate user eligibility based on various attributes like age, department, income, and experience. Using an Abstract Syntax Tree (AST), it allows for the dynamic creation, combination, and modification of rules. This project is structured in a 3-tier architecture, consisting of a simple user interface (UI), an API, and a backend data layer.

Features:

Dynamic Rule Creation: Create rules using a defined syntax that can be transformed into an AST for evaluation.
AST Representation: Use an Abstract Syntax Tree to represent and manipulate rules programmatically.
Rule Evaluation: Evaluate incoming data against defined rules to determine eligibility.
Error Handling: Robust error handling for invalid rule strings and missing data.
Rule Modification: Modify existing rules by altering AST nodes dynamically.
Catalog Validation: Ensure attributes used in rules are part of a specified catalog.
Bonus Features
User-defined Functions: Extend the rule language with user-defined functions for complex conditions.
Advanced Error Handling: Manage various error cases such as syntax errors in rules.
Comprehensive Attribute Validation: Validate rules against a predefined catalog of attributes.

Prerequisites:

Node.js (v14 or higher)
MongoDB (Local or cloud instance)

Installation

Clone the repository:

git clone https://github.com/your-username/rule-engine.git
cd rule-engine
Install dependencies for both backend and frontend:


npm install
cd frontend
npm install
cd ..

Setup MongoDB
Ensure that MongoDB is running on mongodb://localhost:27017/ruleEngine. Modify the database connection string in backend/server.js if necessary.

Running the Application

Start the backend server: 
node server.js

Start the frontend React application:
cd frontend
npm start

API Endpoints
POST /api/rules/create: Create a new rule from a rule string.
POST /api/rules/combine: Combine multiple rules into a single rule.
POST /api/rules/evaluate: Evaluate a rule against provided data.
