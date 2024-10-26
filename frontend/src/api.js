// src/api.js
import axios from 'axios';

// Function to create a new rule
export const createRule = async (ruleData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/rules/create', ruleData);
        return response.data;
    } catch (error) {
        throw error; // Propagate the error to be caught in your component
    }
};

// Function to fetch all rules
export const fetchRules = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/rules'); // Ensure the endpoint is correct
        return response.data;
    } catch (error) {
        throw error; // Propagate the error to be caught in your component
    }
};
