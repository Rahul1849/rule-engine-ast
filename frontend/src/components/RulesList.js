// src/components/RulesList.js
import React, { useEffect, useState } from 'react';
import { fetchRules } from '../api'; // Ensure this matches the export in api.js

const RulesList = () => {
    const [rules, setRules] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadRules = async () => {
            try {
                const rulesData = await fetchRules(); // Fetch rules using the imported function
                setRules(rulesData);
            } catch (err) {
                setError('Error fetching rules');
                console.error(err);
            }
        };

        loadRules();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Rules List</h2>
            <ul>
                {rules.map((rule) => (
                    <li key={rule._id}>{rule.ruleName}</li>
                ))}
            </ul>
        </div>
    );
};

export default RulesList;
